#!/usr/bin/env python3

"""

This file is for helping to convert the starting CSV file with
tree data into a format that can be uploaded to ArcGIS

"""

import sys
import numpy as np
import pandas as pd
import io

START_OBJECT_ID = 20
USE_OBJECT_IDS = False

def add_object_id(pdf):
    tree_numbers = pd.Series(list(range(START_OBJECT_ID, len(pdf) + START_OBJECT_ID))).to_numpy()
    pdf['tree_number'] = tree_numbers
    return pdf

def merge_globalid_file(renamed_pdf, globalid_file):
    gid_df = pd.read_csv(globalid_file)
    gid_df = gid_df.rename(columns={'ObjectID': 'objectid', 'GlobalID': 'globalid'}, inplace=False)
    new_pdf = renamed_pdf.merge(gid_df[['objectid', 'globalid']], left_on='tree_number', right_on='objectid')
    new_pdf = new_pdf.drop(columns=['objectid', 'tree_number'])
    return new_pdf

def main(filename: str, output_filename: str = None, globalid_file=None):
    with open(filename, 'rb') as f:
        content = f.read()
    content = content.replace(b'\xd4', b"'")
    content = content.replace(b'\xd5', b"'")
    content = content.replace(b'\xca', b" ")
    content = content.replace(b'\r', b'\n')
    content = list(filter(lambda line: not line.startswith(b','), content.split(b'\n')))
    content = b'\n'.join(content)
    content = content.decode('utf-8')
    pdf = pd.read_csv(io.StringIO(content))
    pdf = pdf[['Species', 'Common name', 'Date planted', 'Address', 'Latitude', 'Longitude', 'Adopter name', 'Adopter phone', 'Adopter email']]
    pdf = pdf.drop(columns=['Common name', 'Address', 'Adopter phone'])
    renamed_pdf = pdf.rename(columns={
        'Species': 'verified_tree_species',
        'Longitude': 'Longitude',
        'Latitude': 'Latitude',
        'Adopter name': 'name_or_group',
        'Adopter email': 'contact_email',
        'Date planted': 'date_planted',
    }, inplace=False)
    renamed_pdf['contact_approval'] = np.where(pd.notnull(renamed_pdf['contact_email']), 'Yes', 'No')
    renamed_pdf['name_visibility'] = np.where(pd.notnull(renamed_pdf['name_or_group']), 'Yes', 'No')
    renamed_pdf['verified'] = 'yes'
    renamed_pdf['name_publicly'] = np.where(renamed_pdf['name_visibility'] == 'Yes', renamed_pdf['name_or_group'], 'Anonymous')
    renamed_pdf['notes'] = 'Auto-populated starting data'
    renamed_pdf['tree_species'] = renamed_pdf['verified_tree_species']

    renamed_pdf = renamed_pdf[renamed_pdf['Longitude'].notna()]
    renamed_pdf = renamed_pdf.fillna('')

    if USE_OBJECT_IDS:
        renamed_pdf = add_object_id(renamed_pdf)
    if globalid_file is not None and len(globalid_file) > 0:
        renamed_pdf = merge_globalid_file(renamed_pdf, globalid_file)

    output_filename = output_filename if output_filename is not None else ('.'.join(filename.split('.')[:-1]) + '.csv')
    renamed_pdf.to_csv(output_filename.replace(' ', '_').lower(), index=False)

if __name__ == "__main__":
    main(
        sys.argv[1],
        output_filename=(None if len(sys.argv) <= 2 else sys.argv[2]),
        globalid_file=(None if len(sys.argv) <= 3 else sys.argv[3])
    )
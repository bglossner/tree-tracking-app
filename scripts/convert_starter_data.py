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
USE_OBJECT_IDS = True

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

def convert_names(pdf):
    renamed_pdf = pdf.rename(columns={
        'Verified Tree Species': 'verified_tree_species',
        'Name or Group': 'record_your_initials',
        'Contact Email': 'contact_email',
        'Name Visibility': 'name_visibility',
        'Name to Show': 'show_name',
    }, inplace=False)
    # renamed_pdf = renamed_pdf[['verified_tree_species', 'record_your_initials', 'contact_email', 'name_visibility', 'show_name']]
    return renamed_pdf

def main(filename: str, globalid_file=None):
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
        'Species': 'Verified Tree Species',
        'Longitude': 'x',
        'Latitude': 'y',
        'Adopter name': 'Name or Group',
        'Adopter email': 'Contact Email',
        'Date planted': 'Date Planted',
    }, inplace=False)
    renamed_pdf['Contact Approval'] = np.where(pd.notnull(renamed_pdf['Contact Email']), 'Yes', 'No')
    renamed_pdf['Name Visibility'] = np.where(pd.notnull(renamed_pdf['Name or Group']), 'Yes', 'No')
    renamed_pdf['Verified'] = 'yes'
    renamed_pdf['Name to Show'] = np.where(renamed_pdf['Name Visibility'] == 'Yes', renamed_pdf['Name or Group'], 'Anonymous')
    renamed_pdf['Notes'] = 'Auto-populated starting data'
    renamed_pdf['This tree needs adoption'] = 'No'
    renamed_pdf['field_17'] = renamed_pdf['Verified Tree Species']

    renamed_pdf = renamed_pdf[renamed_pdf['x'].notna()]
    renamed_pdf = renamed_pdf.fillna('')

    renamed_pdf = convert_names(renamed_pdf)
    if USE_OBJECT_IDS:
        renamed_pdf = add_object_id(renamed_pdf)
    if globalid_file is not None and len(globalid_file) > 0:
        renamed_pdf = merge_globalid_file(renamed_pdf, globalid_file)

    without_extension = '.'.join(filename.split('.')[:-1])
    renamed_pdf.iloc[150:].to_csv(without_extension.replace(' ', '_').lower() + '.csv', index=False)

if __name__ == "__main__":
    main(sys.argv[1], globalid_file=(None if len(sys.argv) <= 2 else sys.argv[2]))
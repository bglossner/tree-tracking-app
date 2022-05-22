#!/usr/bin/env python3

import sys
import numpy as np
import pandas as pd
import io

def main(filename: str):
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
    renamed_pdf = renamed_pdf[renamed_pdf['x'].notna()]
    renamed_pdf = renamed_pdf.fillna('')
    without_extension = '.'.join(filename.split('.')[:-1])
    renamed_pdf.to_csv(without_extension.replace(' ', '_').lower() + '.csv', index=False)

if __name__ == "__main__":
    main(sys.argv[1])
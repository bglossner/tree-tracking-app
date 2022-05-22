import { Typography } from '@mui/material';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import { PUBLIC_VIEW_URL } from '../../../constants/ArcGIS';
import { useEffect } from 'react';
import { getAttachments, queryFeatures } from '@esri/arcgis-rest-feature-layer';
import './RecentlyPlantedCard.scss'

const CARDS_DISPLAYED = 5;

interface ICardData {
  "img": String,
  "tree_species": String,
  "tree_number": number,
  "date_planted": Date,
  "ShowableName": String
};

function getData() {
  let mapJSON;
  useEffect(() => {
    queryFeatures({
      url: PUBLIC_VIEW_URL,
      resultRecordCount: CARDS_DISPLAYED,
      orderByFields: "objectid DESC",
    }).then(x => {
      mapJSON = x;
    })

    fetch(`${PUBLIC_VIEW_URL}/queryAttachments?f=json`)
  }, []);

  console.log(mapJSON);
}

export function DataProcessor(data: ICardData) {
  return data;
}
import { getAttachments, queryFeatures } from '@esri/arcgis-rest-feature-layer';
import { useEffect } from 'react';
import { MAP_URL, PUBLIC_VIEW_URL } from '../constants/ArcGIS';
import './map-content.scss';
import { MapSLO } from './Map/MapSLO';
import { PlantedDashboard } from './planted-dashboard/PlantedDash';

export const MapContent = () => {

  useEffect(() => {
    queryFeatures({
      url: PUBLIC_VIEW_URL,
      resultRecordCount: 5,
      orderByFields: "objectid DESC",
    }).then(x => {
      console.log(x);
    })

    fetch(`${PUBLIC_VIEW_URL}/queryAttachments?f=json`)
  }, []);

  return (
    <div className="MapContent">
      <MapSLO />
      <PlantedDashboard />
    </div>
  );
};
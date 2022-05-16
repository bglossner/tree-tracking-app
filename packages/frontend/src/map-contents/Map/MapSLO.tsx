import { MAP_URL } from '../../constants/ArcGIS';
import './MapSLO.scss'

export const MapSLO = () => {
  return (
    <div className="embed-container">
      <iframe scrolling="no" title="10000trees2" src={MAP_URL}></iframe>
    </div>
  );
};
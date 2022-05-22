import { MAP_URL } from '../../constants/ArcGIS';
import './MapSLO.scss'

export const MapSLO = () => {
  return (
    <div className="embed-container">
      <iframe width="900" height="700" scrolling="no" title="10000 trees2" src={MAP_URL} />
    </div>
  );
};
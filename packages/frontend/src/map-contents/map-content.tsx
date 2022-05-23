import './map-content.scss';
import { MapSLO } from './Map/MapSLO';
import { PlantedDashboard } from './planted-dashboard/PlantedDash';

interface IProps {
  currentPlanted: number;
}

export const MapContent = ({ currentPlanted }: IProps) => {
  return (
    <div className="MapContent">
      <MapSLO />
      <PlantedDashboard currentPlanted={currentPlanted} />
    </div>
  );
};
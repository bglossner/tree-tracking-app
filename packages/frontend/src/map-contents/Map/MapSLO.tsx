import { MAP_URL } from '../../constants/ArcGIS';
import { useQuery } from '../../util/hooks/useQuery';
import './MapSLO.scss';

export const TREE_NUMBER_QUERY_PARAM = 'tree_number';

function getMapUrl(treeNumber: string | null) {
  if (treeNumber) {
    return `${MAP_URL}&query=Public_Field_View_v4_276%2Cobjectid=${treeNumber}`;
  } else {
    return `${MAP_URL}`;
  }
}

export const MapSLO = () => {
  const query = useQuery();

  return (
    <div className="embed-container">
      <iframe scrolling="no" title="10000 trees searchable map" src={getMapUrl(query.get(TREE_NUMBER_QUERY_PARAM))} />
    </div>
  );
};
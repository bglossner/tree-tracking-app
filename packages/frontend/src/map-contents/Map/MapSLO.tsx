import { LENGTHENED_MAP_URL, MAP_URL } from '../../constants/ArcGIS';
import { useQuery } from '../../util/hooks/useQuery';
import './MapSLO.scss';

export const TREE_NUMBER_QUERY_PARAM = 'tree_number';

function getMapUrl(query: string | null) {
  if (query) {
    return `${LENGTHENED_MAP_URL}&${TREE_NUMBER_QUERY_PARAM}=${query}`;
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
import { Typography } from '@mui/material';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import { IRecentlyPlantedRecord } from '../PlantedDash';
import { Link } from 'react-router-dom';
import './RecentlyPlantedCard.scss';
import { TREE_NUMBER_QUERY_PARAM } from '../../Map/MapSLO';

interface IProps extends IRecentlyPlantedRecord {}

export const RecentlyPlantedCard = ({ img, treeSpecies, treeNumber, datePlanted, name }: IProps) => {
  const link = `/?${TREE_NUMBER_QUERY_PARAM}=${treeNumber}#Map`;

  return (
    <Card>
      <CardContent>
        <Link className='recently-planted-img-container' to={link}>
          <img className='recently-planted-img' src={img} alt={`Tree ${treeNumber}`} />
        </Link>
        <Typography className='recently-planted-left recently-planted-tree-number' variant='h5' >
          <Link to={link}>
            {`#${treeNumber}`}
          </Link>
        </Typography>
        <Typography className='recently-planted-left recently-planted-tree-species' variant='h5' >
          {treeSpecies}
        </Typography>
        <Typography className='recently-planted-right recently-planted-tree-date' variant='h5' >
          {datePlanted.toLocaleDateString('en-US')}
        </Typography>
        <Typography className='recently-planted-right recently-planted-tree-name' variant='h5' >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
import { Typography } from '@mui/material';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import { IRecentlyPlantedRecord } from '../PlantedDash';
import './RecentlyPlantedCard.scss';

interface IProps extends IRecentlyPlantedRecord {}

export const RecentlyPlantedCard = ({ img, treeSpecies, treeNumber, datePlanted, name }: IProps) => {
  return (
    <Card>
      <CardContent>
        <img className='recently-planted-img' src={img} alt={`Tree ${treeNumber}`} />
        <Typography className='recently-planted-left recently-planted-tree-number' variant='h5' >
          {`#${treeNumber}`}
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
import { Typography } from '@mui/material';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import './RecentlyPlantedCard.scss'

export const RecentlyPlantedCard = () => {
  return (
      <Card>
        <CardContent>
          <Typography variant='h5' >
            Quercus Agrofolia
          </Typography>
        </CardContent>
      </Card>
  );
}
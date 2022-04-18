import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import './PlantedDash.scss';
import CountUp from 'react-countup';
import { RecentlyPlantedCard } from './recently-planted-card/RecentlyPlantedCard';

export const PlantedDashboard = () => {
  const currentPlanted = 2124;
  const DELAY = 0.1;
  const COUNT_UP_DURATION = 2;

  return (
    <div>
      <CountUp className='map-counter' delay={DELAY} end={currentPlanted} duration={COUNT_UP_DURATION} separator=',' useEasing={true}/>&nbsp;&nbsp;
      <p className='trees-planted-label'>Trees Planted</p>
      <div className='card-holder'>
        <h2 className='recently-planted-label' >Recently Planted</h2>
        <RecentlyPlantedCard />
      </div>
    </div>

  )
}
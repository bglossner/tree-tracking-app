import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import './PlantedDash.scss';
import CountUp from 'react-countup';

export const PlantedDashboard = () => {
  const currentPlanted = 2124;
  const DELAY = 0.1;
  const COUNT_UP_DURATION = 2;

  return (
    <div className="planted-dashboard">
      <CountUp className='map-counter' delay={DELAY} end={currentPlanted} duration={COUNT_UP_DURATION} separator=',' useEasing={true}/>&nbsp;&nbsp;
      <p className='trees-planted-label'>Trees Planted</p>
      <div className='dashboard'>
        <h2 className='recently-planted-label' >Recently Planted</h2>
      </div>
    </div>

  )
}
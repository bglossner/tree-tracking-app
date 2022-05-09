import './PartnersSlide.scss';
import forestService from '../../assets/images/logos-slide/forest-service.png';
import calfire from '../../assets/images/logos-slide/calfire-logo.png';
import ecoslo from '../../assets/images/logos-slide/ecoslo-logo.png';
import cityOfSlo from '../../assets/images/logos-slide/city-of-slo-logo.png';
import rotaryClub from '../../assets/images/logos-slide/rotary-club-logo.png';

export const PartnersSlide = () => {
  return (
    <div className='partners-slide-container'>
      <p>Want to help in other ways? Check out resources from our partners.</p>

      <div className='logos-container'>
        <img src={calfire} alt="Cal Fire Logo" />
        <img style={{ width: '20%', }} src={ecoslo} alt="EcoSlo Logo" />
        <img src={cityOfSlo} alt="City of SLO Logo" />
        <img src={forestService} alt="Forest Service Logo" />
        <img style={{ height: '15%', width: '15%', }} src={rotaryClub} alt="Rotary Club Logo" />
      </div>
    </div>
  );
};
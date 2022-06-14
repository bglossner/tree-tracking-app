import './PartnersSlideView.scss';
import forestService from '../../assets/images/logos-slide/forest-service.png';
import calfire from '../../assets/images/logos-slide/calfire-logo.png';
import ecoslo from '../../assets/images/logos-slide/ecoslo-logo.png';
import cityOfSlo from '../../assets/images/logos-slide/city-of-slo-logo.png';
import rotaryClub from '../../assets/images/logos-slide/rotary-club-logo.png';

/**
 * Creates a clickable icon from a URL and an image 
 */
const PartnerLinkImage = ({ link, img }: { link: string, img: JSX.Element }) => {
  return (
    <a className='partner-anchor-wrapper' href={link}>
      {img}
    </a>
  )
}

/**
 * Displays a list of clickable icons that link to the websites of our
 * project's partners
 */
export const PartnersSlideView = () => {
  return (
    <div className='partners-slide-container'>
      <p>Want to help in other ways? Check out resources from our partners.</p>

      <div className='logos-container'>
        <PartnerLinkImage link='https://www.fire.ca.gov/' img={<img src={calfire} alt="Cal Fire Logo" />} />
        <PartnerLinkImage link='https://www.ecoslo.org/plant-trees' img={<img style={{ width: '100%', }} src={ecoslo} alt="EcoSlo Logo" />} />
        <PartnerLinkImage link='https://www.slocity.org/home' img={<img src={cityOfSlo} alt="City of SLO Logo" />} />
        <PartnerLinkImage link='https://www.fs.usda.gov/' img={<img src={forestService} alt="Forest Service Logo" />} />
        <PartnerLinkImage link='https://www.slorotary.org/' img={
            <img style={{ height: '75%', width: '75%', }} src={rotaryClub} alt="Rotary Club Logo" />
        } />
      </div>
    </div>
  );
};
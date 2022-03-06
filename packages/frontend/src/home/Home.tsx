import './Home.scss';
import { Slideshow } from '../slideshow/Slideshow';
import { RegisterTree } from '../register-tree/RegisterTree';
import { MapContent } from '../map-contents/map-content';

export const Home = () => {
  return (
    <main>
      <RegisterTree />
      {/* Just filler text to demo scrolling. Header links scroll tp specific id tags */}
      <h1 id='About' className='anchor'>About</h1>
      <Slideshow/>
      <h1 id='Map' className='anchor'>Map</h1>
      <MapContent/>
      <br/>
    </main>
  );
}
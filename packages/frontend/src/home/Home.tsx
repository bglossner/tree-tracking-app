import './Home.scss';
import { Slideshow } from '../slideshow/Slideshow';
import { RegisterTree } from '../register-tree/RegisterTree';
import { MapContent } from '../map-contents/map-content';
import { PlantPage } from '../plant-tree/PlantPage';
import { useEffect, useState } from 'react';
import { getNumberOfTrees } from '../util/common-queries';

export const Home = () => {
  const [numberOfTrees, setNumberOfTrees] = useState(0);

  useEffect(() => {
    getNumberOfTrees()
      .then((trees) => {
        setNumberOfTrees(trees);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <main>
      <RegisterTree currentPlanted={numberOfTrees} />
      {/* Just filler text to demo scrolling. Header links scroll tp specific id tags */}
      <h1 id='Plant' className='anchor'>Plant a Tree</h1>
      <PlantPage />
      <h1 id='About' className='anchor'>About</h1>
      <Slideshow/>
      <h1 id='Map' className='anchor'>Map</h1>
      <MapContent currentPlanted={numberOfTrees} />
      <br/>
    </main>
  );
}
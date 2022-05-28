import './Home.scss';
import { Slideshow } from '../slideshow/Slideshow';
import { RegisterTree } from '../register-tree/RegisterTree';
import { MapContent } from '../map-contents/map-content';
import { PlantPage } from '../plant-tree/PlantPage';
import { useEffect, useState } from 'react';
import { getNumberOfTrees } from '../util/common-queries';

/**
 * Component for home page
 */
export const Home = () => {
  // Set number of trees as 0
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
      <section>
        <RegisterTree currentPlanted={numberOfTrees} />
      </section>
      <section className='main-pg-section'>
        <h1 id='Plant' className='anchor'>Plant a Tree</h1>
        <PlantPage />
      </section>
      <section className='main-pg-section'>
        <h1 id='About' className='anchor'>About</h1>
        <Slideshow />
      </section>
      <section className='main-pg-section'>
        <h1 id='Map' className='anchor'>Map</h1>
        <MapContent currentPlanted={numberOfTrees} />
      </section>
    </main>
  );
}
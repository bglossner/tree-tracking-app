import './PlantedDash.scss';
import { RecentlyPlantedCard } from './recently-planted-card/RecentlyPlantedCard';
import { useEffect, useState } from 'react';
import { IRetrievedData, retrieveRecentlyPlantedData } from './recently-planted-card/DataProcessor';

interface IProps {
  currentPlanted: number;
} 

export interface IRecentlyPlantedRecord {
  img: string;
  treeSpecies: string;
  treeNumber: number;
  datePlanted: Date;
  name: string;
}

const dataProcessor = ({
  img, verified_tree_species, date_planted, show_name, objectid, recorded_tree_species
}: IRetrievedData): IRecentlyPlantedRecord => {
  return {
    img: img.src,
    treeSpecies: verified_tree_species || recorded_tree_species || 'Currently Unkwown',
    name: show_name,
    datePlanted: new Date(date_planted),
    treeNumber: objectid,
  }
};

export const PlantedDashboard = ({ currentPlanted }: IProps) => {
  const [recentlyPlanted, setRecentlyPlanted] = useState<IRecentlyPlantedRecord[]>([]);

  useEffect(() => {
    retrieveRecentlyPlantedData()
      .then((data) => {
        setRecentlyPlanted(data.map(dataProcessor));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className='dashboard-outline'>
      <div className='dashboard-header'>
        <h2 className='recently-planted-label'>Recently Planted</h2>
        <div className='map-number-of-trees'>
          <p className='planted-count'>{currentPlanted}</p>
          <p className='trees-planted-label'>Trees Total</p>
        </div>
      </div>
      <div className='card-holder'>
        {recentlyPlanted.map((record, idx) => <RecentlyPlantedCard key={`rec-planted-${idx}`} {...record} />)}
      </div>
    </div>

  )
}
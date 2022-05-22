import './PlantedDash.scss';
import CountUp from 'react-countup';
import { RecentlyPlantedCard } from './recently-planted-card/RecentlyPlantedCard';
import { useEffect, useState } from 'react';

interface IProps {
  currentPlanted: number;
} 

export interface IRecentlyPlantedRecord {
  img: string;
  treeSpecies: string;
  treeNumber: number;
  datePlanted: Date;
  ShowableName: string;
}

interface IPreProcessedData {
  img: string;
  tree_species: string;
  tree_number: number;
  date_planted: string;
  ShowableName: string;
}

const retrieveRecentlyPlantedDataMock = async (): Promise<IPreProcessedData[]> => {
  const data: IPreProcessedData[] = await (await import('./example-card-data.json')).default.trees;
  return data;
}

const dataProcessor = async (
  { img, tree_number, tree_species, date_planted, ShowableName }: IPreProcessedData
): Promise<IRecentlyPlantedRecord> => {

  const treeData = await (await import(`../../assets/tests/${img}.jpg`)).default;

  return {
    img: treeData,
    treeNumber: tree_number,
    treeSpecies: tree_species,
    datePlanted: new Date(date_planted),
    ShowableName,
  };
};

export const PlantedDashboard = ({ currentPlanted }: IProps) => {
  const [recentlyPlanted, setRecentlyPlanted] = useState<IRecentlyPlantedRecord[]>([]);

  useEffect(() => {
    retrieveRecentlyPlantedDataMock()
      .then((data) => {
        // data.forEach((record) => dataProcessor(record));
        Promise.all(data.map((record) => dataProcessor(record)))
          .then((resolvedData) => setRecentlyPlanted(resolvedData));
        // setRecentlyPlanted();
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
          <CountUp className='map-counter' end={currentPlanted} duration={0} separator=',' useEasing={true}/>
          <p className='trees-planted-label'>Trees Total</p>
        </div>
      </div>
      <div className='card-holder'>
        {recentlyPlanted.map((record, idx) => <RecentlyPlantedCard key={`rec-planted-${idx}`} {...record} />)}
      </div>
    </div>

  )
}
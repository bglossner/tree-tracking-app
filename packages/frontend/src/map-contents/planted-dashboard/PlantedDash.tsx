import './PlantedDash.scss';
import { RecentlyPlantedCard } from './recently-planted-card/RecentlyPlantedCard';
import { useEffect, useState } from 'react';
import { IRetrievedData, retrieveRecentlyPlantedData } from './recently-planted-card/DataProcessor';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { usePrevious } from '../../util/hooks/usePrevious';
import { useWindowSize } from '../../util/hooks/useWindowInfo';

const CARDS_DISPLAYED = 5;
const TREES_TO_RETRIEVE = 40;
const TREES_TO_RETRIEVE_INCREMENTAL = 20;

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
  img, verified_tree_species, date_planted, name_publicly, objectid, recorded_tree_species
}: IRetrievedData): IRecentlyPlantedRecord => {
  return {
    img: img.src,
    treeSpecies: verified_tree_species || recorded_tree_species || 'Currently Unkwown',
    name: name_publicly,
    datePlanted: new Date(date_planted),
    treeNumber: objectid,
  }
};

export const PlantedDashboard = ({ currentPlanted }: IProps) => {
  const [retrievedTrees, setRetrievedTrees] = useState<IRecentlyPlantedRecord[]>([]);
  const [retrievalLock, setRetrievalLock] = useState(false); 
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedAllData, setLoadedAllData] = useState(false);
  const [rightBtnDisabled, setRightBtnDisabled] = useState(true);
  const { isDesktop } = useWindowSize();

  const prevPage = usePrevious(currentPage);

  const onPaginationDirectionClicked = (direction: -1 | 1) => {
    setCurrentPage(Math.max(currentPage + (direction * CARDS_DISPLAYED), 0));
  };

  const onLastPage = () => {
    return currentPage + CARDS_DISPLAYED >= retrievedTrees.length;
  };

  const getActiveTrees = (): IRecentlyPlantedRecord[] => {
    if (retrievedTrees.length === 0) {
      return [];
    }

    return retrievedTrees.slice(
      currentPage,
      Math.min(
        currentPage + CARDS_DISPLAYED,
        retrievedTrees.length
      )
    );
  };

  useEffect(() => {
    if (loadedAllData) {
      setRightBtnDisabled(false);
      return;
    }

    let numTreesToRetrieve: number;
    const start = retrievedTrees.length;

    if (currentPage === 0 && retrievedTrees.length === 0) {
      numTreesToRetrieve = TREES_TO_RETRIEVE;
    } else if (prevPage && prevPage > currentPage) {
      setRightBtnDisabled(false);
      return;
    } else if (currentPage + TREES_TO_RETRIEVE > retrievedTrees.length) {
      numTreesToRetrieve = TREES_TO_RETRIEVE_INCREMENTAL;
    } else {
      setRightBtnDisabled(false);
      return;
    }

    if (retrievalLock) {
      return;
    } else {
      setRetrievalLock(true);
    }

    setRightBtnDisabled(true);

    retrieveRecentlyPlantedData(start, numTreesToRetrieve)
      .then((data) => {
        if (data.length < numTreesToRetrieve) {
          setLoadedAllData(true);
        }
        setRetrievedTrees([...retrievedTrees, ...data.map(dataProcessor)]);
        setRightBtnDisabled(false);
        setRetrievalLock(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentPage, retrievedTrees, loadedAllData, prevPage, retrievalLock]);

  const fontSize = isDesktop ? '150%' : null;

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
        {getActiveTrees().map((record, idx) => <RecentlyPlantedCard key={`rec-planted-${idx}`} {...record} />)}
      </div>
      <div className='pagination-container'>
        {currentPage !== 0 && (
          <IconButton onClick={() => onPaginationDirectionClicked(-1)}>
            <ChevronLeftIcon sx={{ fontSize }} />
          </IconButton>
        )}
        {!onLastPage() && (
          <IconButton
            disabled={rightBtnDisabled}
            onClick={() => { setRightBtnDisabled(true); onPaginationDirectionClicked(1) }}
          >
            <ChevronRightIcon sx={{ fontSize }} />
          </IconButton>
        )}
      </div>
    </div>

  )
}
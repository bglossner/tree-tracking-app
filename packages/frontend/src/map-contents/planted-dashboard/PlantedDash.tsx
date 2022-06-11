import './PlantedDash.scss';
import { RecentlyPlantedCard } from './recently-planted-card/RecentlyPlantedCard';
import { useEffect, useState } from 'react';
import { IRetrievedData, retrieveRecentlyPlantedData } from './recently-planted-card/DataProcessor';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { usePrevious } from '../../util/hooks/usePrevious';
import { useWindowSize } from '../../util/hooks/useWindowInfo';

// Number of trees to be displaying at once on ticker
const CARDS_DISPLAYED = 5;

// this is the number of trees to retrieve at the start
const TREES_TO_RETRIEVE = 40;

// this is the number of trees to retrieve iteratively as the user
// clicks "next"
const TREES_TO_RETRIEVE_INCREMENTAL = 20;

interface IProps {
  /**
   * Number of trees currently planted
   */
  currentPlanted: number;
}

export interface IRecentlyPlantedRecord {
  /**
   * Source of attachment for image. Base64 encoded string or URL
   */
  img: string;
  treeSpecies: string;
  treeNumber: number;
  datePlanted: Date;
  /**
   * Name of planter
   */
  name: string;
}

/**
 * Converts given relatively uncleaned retrieved data from ArcGIS into proper props
 * value to be passed into RecentlyPlantedCard
 */
const dataProcessor = ({
  img, verified_tree_species, date_planted, name_publicly, objectid, recorded_tree_species
}: IRetrievedData): IRecentlyPlantedRecord => {
  return {
    img: img.src,
    // tree species, if known
    treeSpecies: verified_tree_species || recorded_tree_species || 'Currently Unknown',
    name: name_publicly,
    datePlanted: new Date(date_planted),
    treeNumber: objectid,
  }
};

/**
 * Ticker for showing the recently planted trees
 */
export const PlantedDashboard = ({ currentPlanted }: IProps) => {
  const [retrievedTrees, setRetrievedTrees] = useState<IRecentlyPlantedRecord[]>([]);
  // Used to control whether a request is in progress and to lock the useEffect from retrieving more trees
  const [retrievalLock, setRetrievalLock] = useState(false); 
  // The current tree number to be viewing on ticker
  // 0 indicates the most recently planted
  const [currentPage, setCurrentPage] = useState(0);
  // Whether all the trees have been loaded that exist in ArcGIS
  const [loadedAllData, setLoadedAllData] = useState(false);
  // Whether to disable the "Next" button
  const [rightBtnDisabled, setRightBtnDisabled] = useState(true);
  const { isDesktop } = useWindowSize();

  const prevPage = usePrevious(currentPage);

  // Move dashboard in given direction
  // -1 indicates going forward 5 trees (previous hit), 1 indicates going back 5 trees (next hit)
  const onPaginationDirectionClicked = (direction: -1 | 1) => {
    // Cannot be less than 0
    setCurrentPage(Math.max(currentPage + (direction * CARDS_DISPLAYED), 0));
  };

  const onLastPage = () => {
    return currentPage + CARDS_DISPLAYED >= retrievedTrees.length;
  };

  // Retrieves the CARDS_DISPLAYED number of trees based on currentPage
  const getActiveTrees = (): IRecentlyPlantedRecord[] => {
    if (retrievedTrees.length === 0) {
      return [];
    }

    return retrievedTrees.slice(
      currentPage,
      // Cannot be more than the retrieved trees
      Math.min(
        currentPage + CARDS_DISPLAYED,
        retrievedTrees.length
      )
    );
  };

  // Used to load data on a "Next" clicked to view trees that have not been viewed before
  useEffect(() => {
    // No need to load anymore data
    if (loadedAllData) {
      setRightBtnDisabled(false);
      return;
    }

    let numTreesToRetrieve: number;
    // Where the pagination should start
    const numberOfTreesRetrieved = retrievedTrees.length;

    // If we haven't retrieved any trees, retrieve TREES_TO_RETRIEVE amount
    if (currentPage === 0 && retrievedTrees.length === 0) {
      numTreesToRetrieve = TREES_TO_RETRIEVE;
    // if there was a previous number and that number is greater than current one, the user hit 'Back' btn
    // and we do nothing
    } else if (prevPage && prevPage > currentPage) {
      setRightBtnDisabled(false);
      return;
    } else if (currentPage + TREES_TO_RETRIEVE > retrievedTrees.length) {
      numTreesToRetrieve = TREES_TO_RETRIEVE_INCREMENTAL;
    } else {
      setRightBtnDisabled(false);
      return;
    }

    // If we are retrieving trees already, stop
    if (retrievalLock) {
      return;
    } else {
      setRetrievalLock(true);
    }

    // If data is being loaded, don't let user hit "Next" to prevent spam
    setRightBtnDisabled(true);

    retrieveRecentlyPlantedData(numberOfTreesRetrieved, numTreesToRetrieve)
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
        setRightBtnDisabled(false);
        setRetrievalLock(false);
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
      {/* Left and Right buttons */}
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
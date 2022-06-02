import { Card } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { TreeCircle } from '../../circle-progress-with-tree/TreeCircle';
import { TREE_NUMBER_QUERY_PARAM } from '../../map-contents/Map/MapSLO';
import { useWindowSize } from '../../util/hooks/useWindowInfo';
import './PostRegistrationView.scss';
import TreeImg from './tree-outline-fill-green.svg';

interface IProps {
  /**
   * Tree number, object id of tree
   */
  treeNumber: number;
  /**
   * What to do when user wants to submit another tree
   */
  submitAnotherTree: () => void;
}

/**
 * Component that acts as view for showing a successful tree submission.
 */
export const PostRegistrationView = ({ treeNumber, submitAnotherTree }: IProps) => {
  const { isDesktop } = useWindowSize();
  const widthOfCard = isDesktop ? '25vw' : '80vw';
  const heightOfCard = isDesktop ? '80%' : '70%';
  const topMargin = isDesktop ? '0' : '1em';
  return (
    <main id="post-reg-view">
      <section id="prv-card-container">
        <Card sx={{
          mt: topMargin,
          minWidth: widthOfCard,
          height: heightOfCard,
          borderRadius: '20px',
        }}>
          <h2 className='planted-tree-x'>You just planted tree<br /><span className="tree-number"># {treeNumber}</span></h2>
          <div className="tree-circle-container">
            <TreeCircle
              delay={0.25}
              animationDuration={1.25}
              ratio={1}
              treeImageSrc={TreeImg}
            />
          </div>
        </Card>
        <div id='prv-help'>
          <p className='prv-help-text'>
            Thank you for making our community more beautiful! Your tree has been recorded and is helping SLO become more carbon neutral!
          </p>
          <p className='prv-help-text '>
            Remember to give your tree 5 gallons of water per week.
          </p>
        </div>
      </section>
      <div className='post-reg-actions'>
        <HashLink
          to={`/?${TREE_NUMBER_QUERY_PARAM}=${treeNumber}#Map`}
          className="post-reg-button view-map-btn"
        >
          View on Map
        </HashLink>
        <button
          className="post-reg-button register-another-btn"
          onClick={() => submitAnotherTree()}
        >
          Register Another
        </button>
      </div>
    </main>
  );
};
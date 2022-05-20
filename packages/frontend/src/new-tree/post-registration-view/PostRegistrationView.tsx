import { Card } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { TreeCircle } from '../../circle-progress-with-tree/TreeCircle';
import { TREE_NUMBER_QUERY_PARAM } from '../../map-contents/Map/MapSLO';
import './PostRegistrationView.scss';
import TreeImg from './tree-outline-fill-green.svg';

interface IProps {
  treeNumber: number;
  submitAnotherTree: () => void;
}

export const PostRegistrationView = ({ treeNumber, submitAnotherTree }: IProps) => {
  return (
    <main id="post-reg-view">
      <section id="prv-card-container">
        <Card sx={{
          minWidth: '25vw',
          height: '80%',
          borderRadius: '20px',
        }}>
          <h2>You just planted tree<br /><span className="tree-number"># {treeNumber}</span></h2>
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
          <p className='prv-help-text'>
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
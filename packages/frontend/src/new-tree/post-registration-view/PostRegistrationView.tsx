import { HashLink } from 'react-router-hash-link';
import { TreeCircle } from '../../circle-progress-with-tree/TreeCircle';
import './PostRegistrationView.scss';
import TreeImg from './tree-outline-fill-green.svg';

interface IProps {
  treeNumber: number;
  submitAnotherTree: () => void;
}

export const PostRegistrationView = ({ treeNumber, submitAnotherTree }: IProps) => {
  return (
    <main id="post-reg-view">
      <h2>You just planted tree<br /><span className="tree-number"># {treeNumber}</span></h2>
      <div className="tree-circle-container">
        <TreeCircle
          delay={0.25}
          animationDuration={1.25}
          ratio={1}
          treeImageSrc={TreeImg}
        />
      </div>
      <p>
        Thank you for making our community more beautiful! Your tree has been recorded and is helping SLO become more carbon neutral!
      </p>
      <div className='post-reg-actions'>
        <HashLink
          to="/#Map"
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
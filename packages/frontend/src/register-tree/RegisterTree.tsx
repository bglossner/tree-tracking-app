import './RegisterTree.scss';
import CountUp from 'react-countup';
import { Col, Container, Row } from 'react-bootstrap';
import { TreeCircle } from '../circle-progress-with-tree/TreeCircle';
import TreeOutline from '../assets/tree-outline.svg';
import { Link } from 'react-router-dom';

const COUNT_UP_DURATION = 2;
const PATH_DURATION = COUNT_UP_DURATION;

const TOTAL_TREES_WANTED = 10000;
const DELAY = 0.5;

interface IProps {
  currentPlanted: number;
}

export const RegisterTree = ({ currentPlanted }: IProps) => {
  return (
    <div className='counter-image'>
      <Container className='tree-counter-content'>
        <Row className='counter-welcome'><h1>Help San Luis Obispo Plant 10,000 Trees</h1></Row>
        <Row>
          <Col className='counter-holder'>
            <CountUp className='counter' delay={DELAY} end={currentPlanted} duration={COUNT_UP_DURATION} separator=',' useEasing={true}/>
            <p>Trees Planted</p>
          </Col>
        </Row>
      </Container>
      <div className='trees-planted-progress'>
        <p>{TOTAL_TREES_WANTED} trees</p>
        <TreeCircle
          delay={DELAY}
          animationDuration={PATH_DURATION}
          ratio={currentPlanted / TOTAL_TREES_WANTED}
          treeImageSrc={TreeOutline}
        />
        <p>{TOTAL_TREES_WANTED / 2} trees</p>
      </div>
      <div className='tree-action-btns-container'>
        <Link to='/new-tree' className='tree-action'>Register a Tree</Link>
        {/* <a href='/adopt-tree' className='tree-action'>Adopt a Tree</a> */}
      </div>
    </div>
  );
};
import './RegisterTree.scss';
import CountUp from 'react-countup';
import { Col, Container, Row } from 'react-bootstrap';
import TreeOutline from '../assets/tree-outline.svg';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from '../util/ProgressProvider';

const COUNT_UP_DURATION = 2;
const PATH_DURATION = COUNT_UP_DURATION;

const TOTAL_TREES_WANTED = 10000;
const DELAY = 0.5;

export const RegisterTree = () => {
  const currentPlanted = 2124;

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
        <div className='progress-container'>
          <ProgressProvider delay={DELAY} valueStart={0} valueEnd={(currentPlanted / TOTAL_TREES_WANTED) * 100}>
            {(value: number) => 
              <CircularProgressbarWithChildren
                className='tree-planted-progress-bar'
                value={value}
                styles={buildStyles({
                  strokeLinecap: 'butt', // flat edges
                  pathTransitionDuration: PATH_DURATION,
                })}
              >
              <img style={{ width: '95%', }} id="tree-outline" src={TreeOutline} alt="Tree Outline" />
              </CircularProgressbarWithChildren>
            }
          </ProgressProvider>
        </div>
        <p>{TOTAL_TREES_WANTED / 2} trees</p>
      </div>
      <div className='tree-action-btns-container'>
        <a href='/new-tree' className='tree-action'>Register a Tree</a>
        {/* <a href='/adopt-tree' className='tree-action'>Adopt a Tree</a> */}
      </div>
    </div>
  );
};
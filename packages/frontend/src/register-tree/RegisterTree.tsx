import './RegisterTree.scss';
import CountUp from 'react-countup';
import { Col, Container, Row } from 'react-bootstrap';

export const RegisterTree = () => {
  return (
    <div className='counter-image'>
      <Container className='tree-counter-content'>
        <Row className='counter-welcome'><h1>Welcome to the Urban Forest of San Luis Obispo</h1></Row>
        <Row>
          <Col className='counter-holder'>
            <CountUp className='counter' delay={0.5} end={2124} duration={2} separator=',' useEasing={true}/>
            <p>Trees Planted</p>
          </Col>
        </Row>
      </Container>
      <div className='tree-action-btns-container'>
        <a href='/new-tree' className='tree-action'>Register a Tree</a>
        {/* <a href='/adopt-tree' className='tree-action'>Adopt a Tree</a> */}
      </div>
    </div>
  );
};
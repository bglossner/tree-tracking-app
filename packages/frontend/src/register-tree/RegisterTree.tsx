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
            <CountUp className='counter' end={2124} duration={2} separator=',' useEasing={true}/>
            <p>Trees Planted</p>
          </Col>
        </Row>
      </Container>
      <div className='content'>

      </div>
    </div>
  );
};
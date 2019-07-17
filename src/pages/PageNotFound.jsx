import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageNotFound = () => {
  return (
    <Container>
      <Row className='justify-content-md-center my-5'>
        <Col sm={8}>
          <p className='h3 text-center'>Page Not Found</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;

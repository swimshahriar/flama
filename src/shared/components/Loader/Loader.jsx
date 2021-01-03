import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <div className="mt-3 font-weight-bold">Loadning...</div>
    </Container>
  );
};

export default Loader;

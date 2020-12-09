import React from "react";
import { Container } from "react-bootstrap";

import TopSection from "../components/HomePage/TopSection";
import Features from "../components/HomePage/Features";

const Home = () => {
  return (
    <Container fluid>
      <TopSection />
      <Features />
    </Container>
  );
};

export default Home;

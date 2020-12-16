import React from "react";
import { Container } from "react-bootstrap";

import TopSection from "../components/HomePage/TopSection";
import Features from "../components/HomePage/Features";
import Footer from "../components/HomePage/Footer";

const Home = () => {
  return (
    <Container fluid>
      <TopSection />
      <Features />
      <Footer />
    </Container>
  );
};

export default Home;

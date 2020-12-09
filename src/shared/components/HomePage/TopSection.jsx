import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { motion } from "framer-motion";

import HomeTopImage from "../../../assets/images/home/home-top.svg";

const TopSection = () => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Row className="bg-dark vh-100 text-light">
      <Col md="6" className="my-auto">
        <h1 className="mb-3" data-aos="fade-right" data-aos-duration="1000">
          Make Your Life Easier
        </h1>
        <h3
          className="mb-5"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          Flat Mangement & Expense Tracker
        </h3>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Button variant="success text-uppercase font-weight-bold px-5 py-2">
            Join
          </Button>
        </div>
      </Col>
      <Col md="6" className="my-auto">
        <div
          className="fluid"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <Image src={HomeTopImage} alt="home-top-img" className="w-100" />
        </div>
      </Col>
    </Row>
  );
};

export default TopSection;

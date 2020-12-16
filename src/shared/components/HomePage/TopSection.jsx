import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

import HomeTopImage from "../../../assets/images/home/home-top.svg";

const TopSection = () => {
  return (
    <Row className="bg-dark text-light py-5">
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
      <Col md="6" className="my-auto pt-5">
        <div
          className="fluid"
          data-aos="fade-right"
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

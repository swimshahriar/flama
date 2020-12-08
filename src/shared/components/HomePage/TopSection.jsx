import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";

import HomeTopImage from "../../../assets/images/home/home-top.svg";

const TopSection = () => {
  return (
    <Row className="bg-dark vh-100 text-light">
      <Col md="6" className="my-auto">
        <h1 className="mb-3">Make Your Life Easier</h1>
        <h3 className="mb-5">Flat Mangement & Expense Tracker</h3>
        <Button variant="success">Join Now</Button>
      </Col>
      <Col md="6" className="my-auto">
        <Image src={HomeTopImage} alt="home-top-img" fluid />
      </Col>
    </Row>
  );
};

export default TopSection;

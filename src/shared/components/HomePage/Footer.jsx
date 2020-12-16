import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  AiOutlineFacebook as Fb,
  AiOutlineInstagram as Ig,
  AiOutlineTwitter as Tw,
  AiOutlineLinkedin as Li,
} from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 text-center">
      <Row
        data-aos="fade-up"
        data-aos-duration="500"
        id="footer"
        className="bg-dark text-white px-3 py-5"
      >
        <Col md="4" sm="12" className="mt-5">
          <h3>Description</h3>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            aliquam quo eaque harum laudantium dolor maxime accusamus. Qui,
            quos, non consectetur perspiciatis tempora amet dolores eaque iure
            quia, obcaecati earum?
          </p>
        </Col>
        <Col md="4" sm="12" className="mt-5">
          <h3>Pages</h3>
          <div className="d-flex flex-column mt-3">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Account</a>
            <a href="#">Login/Register</a>
          </div>
        </Col>
        <Col md="4" sm="12" className="mt-5">
          <h3>Socials</h3>
          <div className="mt-2 mb-3 footer-icon">
            <a href="#" className="mx-1">
              <Fb />
            </a>
            <a href="#" className="mx-1">
              <Ig />
            </a>
            <a href="#" className="mx-1">
              <Tw />
            </a>
            <a href="#" className="mx-1">
              <Li />
            </a>
          </div>
        </Col>
      </Row>
      <p className="mt-3">
        © All Rights Reserved by{" "}
        <a href="#" className="text-success font-weight-bold">
          Flama
        </a>
        . Designed and Built By{" "}
        <a
          href="https://github.com/swimshahriar"
          target="_blank"
          className="text-success font-weight-bold"
        >
          Shahriar Swim
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;

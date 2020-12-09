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
        <motion.h1
          className="mb-3"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          Make Your Life Easier
        </motion.h1>
        <motion.h3
          className="mb-5"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 0.6, delay: 0.3 }}
        >
          Flat Mangement & Expense Tracker
        </motion.h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 0.6, delay: 0.5 }}
        >
          <Button variant="success text-uppercase font-weight-bold px-5 py-2">
            Join
          </Button>
        </motion.div>
      </Col>
      <Col md="6" className="my-auto">
        <motion.div
          className="fluid"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 0.8, delay: 0.5 }}
        >
          <Image src={HomeTopImage} alt="home-top-img" className="w-100" />
        </motion.div>
      </Col>
    </Row>
  );
};

export default TopSection;

import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  HiOutlineChatAlt2 as ChatIcon,
  HiOutlineCurrencyDollar as DollarIcon,
  HiPlus as PlusIcon,
} from "react-icons/hi";
import { IoCreateOutline as EditIcon } from "react-icons/io5";

import "./Features.css";

const Features = () => {
  return (
    <div id="features" className="my-auto">
      <h2 className="text-center text-uppercase font-weight-bold pt-5">
        Features
      </h2>
      <Row className="mt-5">
        <Col
          lg="4"
          md="6"
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div className="my-3 feature-icon text-success">
            <PlusIcon />
          </div>
          <h4>Create or Join</h4>
          <p>
            You can create a Channel for your Flat or Join in the existing one
            with <strong>#channel_code</strong>.
          </p>
        </Col>
        <Col
          lg="4"
          md="6"
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <div className="my-3 feature-icon text-success">
            <ChatIcon />
          </div>
          <h4>Channel Chat-Room</h4>
          <p>
            You will get a channel chat room where all the members of the
            channel will be added and can send messages.
          </p>
        </Col>
        <Col
          lg="4"
          md="6"
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <div className="my-3 feature-icon text-success">
            <EditIcon />
          </div>
          <h4>Create, Edit, Delete Bills</h4>
          <p>
            You can create a bill and assign it to a channel member with due
            date.
          </p>
        </Col>
        <Col
          lg="4"
          md="6"
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <div className="my-3 feature-icon text-success">
            <DollarIcon />
          </div>
          <h4>Track Monthly Expenses</h4>
          <p>
            Every user will have an expense tracker in their profile. With it
            user can keep track of their monthly expenses.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Features;

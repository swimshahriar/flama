import React from "react";
import { Toast as Alert } from "react-bootstrap";
import { AiOutlineBell } from "react-icons/ai";

import "./Toast.css";

const Toast = ({ body, title, setShow, show }) => {
  return (
    <div className="toast-container">
      <Alert
        className="toast"
        onClose={() => setShow(false)}
        show={show}
        delay={1500}
        autohide
      >
        <Alert.Header>
          <div className="text-success mr-3">
            <AiOutlineBell />
          </div>
          <strong className="mr-auto">{title}</strong>
        </Alert.Header>
        <Alert.Body>{body}</Alert.Body>
      </Alert>
    </div>
  );
};

export default Toast;

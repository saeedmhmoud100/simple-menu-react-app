import React from "react";
import { Col, Row } from "react-bootstrap";

function Header() {
  return (
    <Row>
      <Col className="justify-content-between text-center">
        <div className="fs-3 text-warning">categories menu</div>
        <div className="d-flex justify-content-center">
          <p className="underline"></p>
        </div>
      </Col>
    </Row>
  );
}

export default Header;

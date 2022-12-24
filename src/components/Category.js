import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function Category() {
  return (
    <Row className="d-flex justify-content-evenly mb-5">
      <Col className="d-flex justify-content-center" sm="12" md="8">
        <div>
          <Button variant="outline-warning m-2">All</Button>
          <Button variant="outline-warning m-2">Breakfast</Button>
          <Button variant="outline-warning m-2">Lunch</Button>
          <Button variant="outline-warning m-2">Dinner</Button>
        </div>
      </Col>
    </Row>
  );
}

export default Category;

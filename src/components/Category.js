import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function Category({ filterByCategory, Categories }) {
  return (
    <Row className="d-flex justify-content-evenly mb-5">
      <Col className="d-flex justify-content-center" sm="12" md="8">
        <div>
          {Categories.map((cat) => (
            <Button
              variant="outline-warning m-2"
              onClick={(_) => filterByCategory(cat)}
              key={cat}
            >
              {cat}
            </Button>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default Category;

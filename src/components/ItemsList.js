import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function ItemsList() {
  return (
    <Row className="my-3">
      <Col sm="12">
        <Card className="d-flex flex-row" style={{ borderRadius: "9px" }}>
          <Card.Img
            style={{
              width: "230px",
              height: "170px",
              borderRadius: "8px",
              margin: "1px",
            }}
            variant="top"
            src="img1.jpg"
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <div className="text-warning">Breakfast meal</div>
              <div className="text-warning mx-3">50$</div>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ItemsList;

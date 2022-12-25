import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";

function ItemsList({ items }) {
  return (
    <Row>
      {items.length > 0 ? (
        items.map((item) => (
          <Col sm="12" className="my-1" key={item.id}>
            <Zoom right cascade>
              <Card className="d-flex flex-row" style={{ borderRadius: "9px" }}>
                <Card.Img
                  style={{
                    width: "230px",
                    height: "170px",
                    borderRadius: "8px",
                    margin: "1px",
                  }}
                  variant="top"
                  src={item.img}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="text-warning">{item.title}</div>
                    <div className="text-warning mx-3">{item.price}</div>
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Zoom>
          </Col>
        ))
      ) : (
        <h2 className="text-center my-2">there is no data!!</h2>
      )}
    </Row>
  );
}

export default ItemsList;

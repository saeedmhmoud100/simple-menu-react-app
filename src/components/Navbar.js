import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar({ onSearch }) {
  const [searchVal, setSearchVal] = useState("");
  const Search = (e) => {
    e.preventDefault();
    if (searchVal !== "") {
      onSearch(searchVal);
    }
    setSearchVal("");
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <div className="text-warning">New Restaurant</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form onSubmit={(e) => Search(e)} className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
            />
            <Button onClick={(e) => Search(e)} variant="outline-warning">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

/** @format */

import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/home">
              <b>SHIT</b>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home/vehicle-list">
                <b>Vehicle</b>
              </Nav.Link>
              <Nav.Link href="/home/vehicle-add">
                <b>Add Vehicle</b>
              </Nav.Link>
              <Nav.Link href="/home/category-list">
                <b>Category</b>
              </Nav.Link>
              <Nav.Link href="/home/category-add">
                <b>Add Category</b>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

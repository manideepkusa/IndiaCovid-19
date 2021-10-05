import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

const Header = (props) => {
  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      expand="sm"
      fixed="top"
      className=" bgColor"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <b style={{ textShadow: "1px 1px blue" }}>
              <i className="fas fa-shield-alt"></i>&nbsp;INDIA{" "}
              <span className="blueStyle">COVID19</span>
            </b>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse.show"
        >
          <Nav className="me-auto">
            <LinkContainer exact to="/search">
              <Nav.Link>States Data</Nav.Link>
            </LinkContainer>

            <LinkContainer exact to="/search/date">
              <Nav.Link>Daily Cases</Nav.Link>
            </LinkContainer>

            <LinkContainer exact to="/guidelines">
              <Nav.Link>GuideLines</Nav.Link>
            </LinkContainer>

            <Nav.Link href="#" onClick={props.click}>
              {props.iconChange ? "Normal Mode" : "Dark Mode"}&nbsp;
              <i
                className={props.iconChange ? "far fa-sun" : "far fa-moon"}
              ></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

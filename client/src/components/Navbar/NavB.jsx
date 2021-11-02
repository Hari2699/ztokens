import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import classes from "./NavB.module.css"

const NavB = () => {
  const history = useHistory()
  
  const logMeOut = () => {
    history.push("/")
  }
  return (
    <React.Fragment>
      <div className={classes.Container}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">ZTOKEN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="/tokens">
                Tokens
              </Nav.Link>
              <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default NavB;

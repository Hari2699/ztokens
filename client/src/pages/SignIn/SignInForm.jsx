import React from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import classes from "./SignIn.module.css";

import PropTypes from "prop-types";

const SignInForm = ({ handleOnChange, handleOnSubmit, email, password }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className={classes.center}>Client Login</h3>
        </Col>
      </Row>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
              required
            />
          </Form.Group>
        </Form.Row>
        <div className={classes.center}>
          <Button variant="info" type="submit">
            Login
          </Button>
        </div>
      </Form>
      <div className={classes.center}>
        <Row className="py-4">
          <Col>
            <a href="/passwordreset"> Forgot password ?</a>
          </Col>
        </Row>
      </div>
      <div className={classes.center}>
        <Row>
          <Col>
            <a href="/signup"> New User </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

SignInForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default SignInForm;

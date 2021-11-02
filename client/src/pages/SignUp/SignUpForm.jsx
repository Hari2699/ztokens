import React, { useState, useEffect } from "react";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import classes from "./SignUp.module.css";

const initialState = {
  name:"",
  email: "",
  password: "",
  confirmpassword: "",
};

const passwordVerification = {
  isLengthy: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumber: false,
  hasSplChr: false,
  confirmpassword: false
};

const SignUpForm = () => {
  const [newUser, setnewUser] = useState(initialState);
  const [passError, setpassError] = useState(passwordVerification);

  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setnewUser({ ...newUser, [name]: value });

    if (name === "password") {
      const isLengthy = value.length > 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSplChr = /[@,#,$,%,^]/.test(value);

      setpassError({
        ...passError,
        isLengthy,
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSplChr,
      });
    }

    if (name === "confirmpassword") {
        

        setpassError({
            ...passError,
            confirmpassword: newUser.password === value
        })
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  

  //console.log(newUser);

  return (
    <Container>
      <Row>
        <Col>
          <h3 className={classes.center}>Registration</h3>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
          <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  name="name"
                  value={newUser.name}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={newUser.email}
                  onChange={handleOnChange}
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
                  value={newUser.password}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="confirmpassword"
                  value={newUser.confirmpassword}
                  onChange={handleOnChange}
                />
                <Form.Text>
                    {!passError.confirmpassword && (
                        <div className="text-danger mb-3">Password doesn't match</div>
                    )}
                </Form.Text>
              </Form.Group>
            </Form.Row>

            <div className={classes.list}>
              <ul className="mb-4">
                <li
                  className={
                    passError.isLengthy ? "text-success" : "text-danger"
                  }
                >
                  Min 8 characters
                </li>
                <li
                  className={
                    passError.hasUpperCase ? "text-success" : "text-danger"
                  }
                >
                  Atleast one upper case
                </li>
                <li
                  className={
                    passError.hasLowerCase ? "text-success" : "text-danger"
                  }
                >
                  Atleast one lower case
                </li>
                <li
                  className={
                    passError.hasNumber ? "text-success" : "text-danger"
                  }
                >
                  Atleast one number
                </li>
                <li
                  className={
                    passError.hasSplChr ? "text-success" : "text-danger"
                  }
                >
                  At least one special characters (@ # $ % ^){" "}
                </li>
              </ul>
            </div>

            <div className={classes.center}>
              <Button
                variant="primary"
                type="submit"
                disabled={Object.values(passError).includes(false)}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <div className={classes.center}>
      <Row className="py-4">
          <Col>
              Already have a account ? <a href="/"> Existing User</a>
          </Col>
      </Row>
      </div>
    </Container>
  );
};

export default SignUpForm;

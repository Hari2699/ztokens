import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import classes from "./PasswordReset.module.css"

import PropTypes from 'prop-types'

const PasswordResetForm = ({handleOnChange, handleOnResetSubmit, email}) => {
    return (
        <Container>
      <Row>
        <Col>
          <h3 className={classes.center}>Reset Password</h3>
        </Col>
      </Row>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleOnChange}
              onSubmit={handleOnResetSubmit}
              required
            />
          </Form.Group>
        </Form.Row>
        <div className={classes.center}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <div className={classes.center}>
        <Row className="py-4">
          <Col>
            <a href="/signin"> Login Now</a>
          </Col>
        </Row>
      </div>
    </Container>
    )
}

PasswordResetForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
  };

export default PasswordResetForm

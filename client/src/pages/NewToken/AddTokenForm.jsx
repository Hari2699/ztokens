import React from "react";
import { Container, Row, Col, Jumbotron, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import "./AddToken.module.css";

const AddTokenForm = ({
  handleOnChange,
  handleOnSubmit,
  formData,
  formError,
}) => {
  console.log(formData);
  return (
    <div>
      <Container className="mt-5 mb-5" fluid>
        <Row>
          <Col>
            <Jumbotron className="mt-3 addNewToken bg-light">
              <Row>
                <Col>
                  <h3 className="text-center">Add New Token</h3>
                </Col>
              </Row>
              <hr />
              <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Subject
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleOnChange}
                      required
                    />
                    <Form.Text className="text-danger">
                      {formError.subject && "Subject is required"}
                    </Form.Text>
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Date
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      type="date"
                      placeholder="Date"
                      name="issueDate"
                      value={formData.issueDate}
                      onChange={handleOnChange}
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Details
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="textarea"
                      placeholder="Details"
                      name="detail"
                      value={formData.detail}
                      onChange={handleOnChange}
                      required
                    />
                  </Col>
                </Form.Group>

                <Button variant="info" type="submit" block>
                  Submit
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

AddTokenForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default AddTokenForm;

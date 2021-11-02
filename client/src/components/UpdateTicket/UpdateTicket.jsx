import React from "react";
import { Button, Form } from "react-bootstrap";
import { PropTypes } from "prop-types";


const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <React.Fragment>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <Form.Text>
          Please reply your message here or update the token
        </Form.Text>
        <Form.Control as="textarea" row="5" name="detail" value={msg} onChange={handleOnChange} />
        <div className="text-center mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </React.Fragment>
  );
};

UpdateTicket.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired
}

export default UpdateTicket;

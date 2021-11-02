import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types'

const SearchForm = ({handleOnChange, str}) => {
    
  return (
    <React.Fragment>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column >
            {/* Search:{" "} */}
          </Form.Label>
          <Col sm="10">
            <Form.Control name="search" type="text" placeholder="Search..." value={str} onChange={handleOnChange} />
          </Col>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
} 

export default SearchForm;

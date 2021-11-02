import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/NavB";
import classes from "./Token.module.css";
import tokens from "../../assets/data/tokens.json";
import MessageHistory from "../../components/MessageHistory/MessageHistory";
import UpdateTicket from "../../components/UpdateTicket/UpdateTicket";

//const token = tokens[0];

const Token = () => {

  const {tId} = useParams();

  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    for (let i = 0; i < tokens.length; i++) {
      if(tokens[i].id === tId){
        setToken(tokens[i])
        continue
      }
      
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert('Form Submitted!!!');
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className={classes.Container}>
        <Container className="mt-5">
          <Row>
            <Col className="text-weight-bolder text-secondary">
            {tId}
              <div className="subjects">Subject: {token.subject}</div>
              <div className="date">Token Opened: {token.addedAt}</div>
              <div className="status">Status: {token.status}</div>
            </Col>
            <Col className="text-right">
              <Button variant="outline-danger">Close Token</Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <MessageHistory msg={token.history} />
            </Col>
          </Row>
          <hr />
          <Row className="mt-4">
            <Col>
              <UpdateTicket msg={message} 
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit} />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Token;

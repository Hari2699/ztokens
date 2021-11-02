import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/NavB";
import SearchForm from "../../components/SearchForm/SearchForm";
import TokenTable from "../../components/TokenTable/TokenTable";
import tokens from "../../assets/data/tokens.json";
import classes from "./TokenList.module.css"
import { Link } from "react-router-dom";

const TokenList = () => {
  const [str, setstr] = useState("");
  const [dispToken, setDispToken] = useState(tokens);

  useEffect(() => {}, [str, dispToken]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setstr(value);
    searchToken(value);
  };

  const searchToken = (sttr) => {
    const displayTokens = tokens.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    setDispToken(displayTokens);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.Container}>
        <Container className="mt-3 " fluid>
          <Row>
            <Col>
            <Link to="/newtoken">
              <Button variant="info">Add New Token</Button>
            </Link>
              
            </Col>
            <Col className="text-right">
              <SearchForm handleOnChange={handleOnChange} str={str} />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <TokenTable tokens={dispToken} />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default TokenList;

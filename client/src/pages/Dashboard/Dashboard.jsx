import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavB";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import TokenTable from "../../components/TokenTable/TokenTable";

import tokens from "../../assets/data/tokens.json";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Link to="/newtoken">
              <Button
                variant="info"
                style={{ "font-size": "2rem", padding: "10px 30px" }}
              >
                Add New Token
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center  mb-2">
            <div>Total Token: 50</div>
            <div>Pending Token: 5</div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">Recently added tokens</Col>
        </Row>
        <hr />
        <Row>
          <Col className="recent-token mb-5">
            <TokenTable tokens={tokens} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;

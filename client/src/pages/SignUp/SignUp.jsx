import React from "react";
import { Jumbotron } from "react-bootstrap";
// import Navbar from "../../components/Navbar/NavB";
// import Footer from "../../components/Footer/Footer"
import classes from "./SignUp.module.css";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className={classes.Container}>
        <Jumbotron className="bg-light">
          <SignUpForm />
        </Jumbotron>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default SignUp;

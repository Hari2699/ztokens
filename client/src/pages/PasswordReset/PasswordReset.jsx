import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/NavB";
import classes from "./PasswordReset.module.css";
import PasswordResetForm from "./PasswordResetForm";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if( !email ){
      return alert("Please enter the email")
    }

    //TODO => call api to submit the form 
    console.log(email)
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.Container}>
        <Jumbotron className={classes.formBox}>
          <PasswordResetForm 
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            email={email}
            password={password}
          />
        </Jumbotron>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PasswordReset;

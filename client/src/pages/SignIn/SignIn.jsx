import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
// import Footer from "../../components/Footer/Footer";
// import Navbar from "../../components/Navbar/NavB";
import classes from "./SignIn.module.css";
import SignInForm from "./SignInForm";

const SignIn = () => {
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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(!email || !password){
      return alert("Please fill all")
    }

    //TODO => call api to submit the form 
    console.log(email,password)
  }

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className={classes.Container}>
        <Jumbotron className="bg-light">
          <SignInForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            email={email}
            password={password}
          />
        </Jumbotron>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default SignIn;

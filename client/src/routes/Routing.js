import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

import Dashboard from "../pages/Dashboard/Dashboard";
import AddToken from "../pages/NewToken/AddToken";
import PasswordReset from "../pages/PasswordReset/PasswordReset";
import SignIn from "../pages/SignIn/SignIn";
import Signup from "../pages/SignUp/SignUp";
import Token from "../pages/Token/Token";
import TokenList from "../pages/TokenList/TokenList";
// import Homepage from "../pages/Home/Home";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={SignIn} />

        {/* <Route  exact path="/" component={Homepage} /> */}
        <Route path="/signup" component={Signup} />
        <Route path="/passwordreset" component={PasswordReset} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/newtoken" component={AddToken} />
        <PrivateRoute path="/tokens" component={TokenList} />
        <PrivateRoute path="/token/:tId" component={Token} />
      </Switch>
    </Router>
  );
};

export default Routing;

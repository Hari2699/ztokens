import React from "react";
import Navbar from "../../components/Navbar/NavB"
// import Footer from "../../components/Footer/Footer";
import classes from "./Home.module.css"

const Home = () => {
  return (
    <React.Fragment>
      <div className={classes.Container}>
      <Navbar />
      {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;

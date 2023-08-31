import React, { Component } from "react";
import Footer from "./Footer";
import LoginFormFunc from "./LoginFormFunc";
import Navbar from "./Navbar";

class Login extends Component {
  render() {
    return (
      <>
      <Navbar />
      <div id="index">
        {/* <LoginForm ele="dsfa" ele2="main2" /> */}
        <LoginFormFunc ele="dsfa" ele2="main2" />
      </div>
      <Footer />
      </>
    );
  }
}
export default Login;

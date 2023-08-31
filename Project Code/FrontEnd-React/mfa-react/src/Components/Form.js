import React, { Component } from "react";
// import "./FormStyling.css";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      contactNo: "",
    };
  }
  userNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  contactNoHandler = (event) => {
    this.setState({
      contactNo: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="formData">
          <h3>Fill the Data</h3>
          <form className="form">
            <label>UserName : </label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.userNameHandler}
            />
            <br />
            <label>Mail Id : </label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.emailHandler}
            />
            <br />
            <label>Contact No:</label>
            <input
              type="text"
              value={this.state.contactNo}
              onChange={this.contactNoHandler}
            />
          </form>
        </div>
        <div className="dataPreview">
          <h3>Your Data Preview</h3>
          <label>Name : {this.state.userName}</label>
          <br />
          <label>Email :{this.state.email}</label>
          <br />
          <label>Contact :{this.state.contactNo}</label>
          <br />
        </div>
      </>
    );
  }
}

export default Forms;

import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <div className="inputBox">
        <input type="text" className="userInput" required="required" />
        <span>First Name</span>
      </div>
    );
  }
}

export default InputField;

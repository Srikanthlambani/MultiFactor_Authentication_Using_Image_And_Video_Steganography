import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    };
  }
  validateUsername = (event) => {
    this.setState(
      {
        userName: event.target.value,
      },
      () => {
        // if (this.state.userName.length > 20 || this.state.userName.length < 5) {
        //   console.log("Length should between 5 and 20");
        // }
        event.target.border = "2px solid red";
      }
    );
  };
  submitData = () => {};
  render() {
    const color = { color: "red", padding: "17px", fontSize: "18px" };
    const mark = <label style={color}>*</label>;
    // const userName = this.state.userName;
    let { userName, email, firstName,lastName, password, confirmPassword } = this.state;
    return (
      <div className="main">
        <h2 className="heading">RegistrationForm</h2>
        <form className="regForm" onSubmit={this.submitData}>
          <div>
            <label>User Name{mark}</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              className="userInput"
              value={userName}
              onChange={this.validateUsername}
              required
            />
          </div>
          <div>
            <label>Email{mark}</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              className="userInput"
              value={email}
              required
            />
          </div>
          <div>
            <label>First Name</label>
            <br />
            <input
              type="text"
              placeholder="@id"
              className="userInput"
              value={firstName}
            />
          </div>
          <div>
            <label>Last Name</label>
            <br />
            <input
              type="text"
              placeholder="@id"
              className="userInput"
              value={lastName}
            />
          </div>
          <div>
            <label>Password{mark}</label>
            <br />
            <input
              type="password"
              className="userInput"
              min="8"
              max="20"
              value={password}
              required
            />
          </div>
          <div>
            <label>Re-Enter Password{mark}</label>
            <br />
            <input
              type="password"
              className="userInput"
              value={confirmPassword}
              required
            />
          </div>
          <div className="captchaClass">
            <input type="checkbox" id="captcha" required />
            <label id="captchaText">I am not a Robot</label>
            <button type="submit" className="subbtn">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

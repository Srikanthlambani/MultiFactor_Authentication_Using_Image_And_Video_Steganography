import React, { Component } from "react";
import "./LoginStyle.css";
import "./inputField.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      authLevel: "",
      otp: "otp",
      image: "image",
      video: "video",
      authType: "",
    };
  }
  changeLevel = (event) => {
    let authType = this.state.authType;
    this.setState({
        authLevel : event.target.value
    })
    if (event.target.value === this.state.otp) {
      authType = (
        <div className="inputBox">
          <input type="number" min="1000" max="9999" placeholder="Enter OTP" />
          {/* <span>OTP</span> */}
        </div>
      );
    } else if (event.target.value === this.state.image) {
      authType = (
        <div>
          <input type="file" />
        </div>
      );
    } else {
      authType = (
        <div>
          <input type="file" />
        </div>
      );
    }
    this.setState({
      authType: authType,
    });
  };
  submitData = () => {
    alert(`Your account is created Mr.${this.state.userName.name},`);
  };
  render() {
    const color = { color: "red", padding: "17px", fontSize: "18px" };
    const mark = <label style={color}>*</label>;
    let { authLevel, otp, image, video, authType } = this.state;
    return (
      <div className={this.props.ele} id={this.props.ele2}>
        <h2 className="heading">Login</h2>
        <form className="regForm" onSubmit={this.submitData}>
          <div>
            <div className="inputBox">
              <input type="text" required />
              <span>Email / Id{mark}</span>
            </div>
          </div>

          <div>
            <div className="inputBox">
              {/* <input type="password" id="hide" /> */}
              <input type="password" className="pwd" required />
              <span>Password{mark}</span>
            </div>
          </div>
          <div>
            <select
              name="authenticationLevel"
              id="authLevelSelect"
              onChange={this.changeLevel}
              value={authLevel}
            >
              <option >Choose Authentication Level</option>
              <option value={otp}>Digit OTP</option>
              <option value={image}>Image OTP</option>
              <option value={video}>Video OTP</option>
            </select>
          </div>
          {authType}
          <div id="urls">
            <a href="/forgotPassword">Forgot Password</a>
            <a href="/signup">Don't have account?</a>
          </div>
          <div>
            <div className="captchaClass">
              <input type="checkbox" id="captcha" required />
              <label id="captchaText">Not a Robot</label>
              <button type="submit" className="subbtn">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

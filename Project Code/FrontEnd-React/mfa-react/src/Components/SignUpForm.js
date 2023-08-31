import React, { Component } from "react";
import "./RegpageStyle.css";
import "./inputField.css";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: { name: "", message: "", op: "" },
      email: { name: "", message: "", op: "" },
      firstName: { name: "", message: "", op: "" },
      lastName: { name: "", message: "", op: "" },
      password: { name: "", message: "", op: "" },
      confirmPassword: { name: "", message: "", op: "" },
      verifyInput: false,
      res:{op:"",message:""}
    };
  }
  // componentDidCatch(){
    
  // }
  validateUsername = (event) => {
    let name = "userName";
    let val = event.target.value;
    let user = this.state.userName;
    user.name = val;
    this.setState(
      {
        userName: user,
      },
      () => {
        this.validateFunc(user, name, val);
      }
    );
  };
  validateEmail = (event) => {
    let name = "email";
    let val = event.target.value;
    let email = this.state.email;
    email.name = val;
    this.setState(
      {
        email: email,
      },
      this.validateFunc(email, name, val)
    );
  };
  validateFirstName = (event) => {
    let name = "firstName";
    let val = event.target.value;
    let id = this.state.firstName;
    id.name = val;
    this.setState(
      {
        firstName: id,
      },
      this.validateFunc(id, name, val)
    );
  };
  validateLastName = (event) => {
    let name = "lastName";
    let val = event.target.value;
    let id = this.state.lastName;
    id.name = val;
    this.setState(
      {
        lastName: id,
      },
      this.validateFunc(id, name, val)
    );
  };
  validatePassword = (event) => {
    let name = "password";
    let val = event.target.value;
    let pass = this.state.password;
    pass.name = val;
    // console.log(val);
    this.setState(
      {
        password: pass,
      },
      this.validateFunc(pass, name, val)
    );
  };
  validateConfirmPassword = (event) => {
    let name = "confirm";
    let val = event.target.value;
    let confirm = this.state.confirmPassword;
    confirm.name = val;
    // console.log(val);
    this.setState(
      {
        confirmPassword: confirm,
      },
      this.validateFunc(confirm, name, val)
    );
  };
  validateFunc(element, name, val) {
    switch (name) {
      case "userName":
        if (val.length > 5) {
          if (val.length > 20) {
            element.op =
              "Name is too large(Length should be in between 6 and 20)";
            element.message = "warn";
          } else {
            element.message = "success";
            element.op = "";
          }
        } else {
          element.message = "warn";
          element.op = `Name is too short(Length should be in between 6 and 20) `;
        }
        this.setState({
          userName: element,
        });
        break;
      case "email":
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regex.test(val)) {
          element.op = "";
          element.message = "success";
        } else {
          element.message = "warn";
          element.op = `Email is not Valid `;
        }
        this.setState({
          email: element,
        });
        break;
      case "firstName":
        if (val.length === 0) {
            element.message = "warn";
            element.op ="First Name must be filled";
          } else {
            element.message = "success";
            element.op = "";
          }
        this.setState({
          firstName: element,
        });
        break;
      case "lastName":
        if (val.length === 0) {
          element.message = "warn";
          element.op ="Last Name must be filled";
        } else {
          element.message = "success";
          element.op = "";
        }
        this.setState({
          lastName: element,
        });
        break;
      case "password":
        let regexPassword =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        if (regexPassword.test(val)) {
          element.message = "success";
        } else {
          element.message = "warn";
          element.op = `Should contain One Upper,Lower Case,Digit & Special Character`;
        }
        this.setState({
          password: element,
        });
        break;
      case "confirm":
        if (this.state.password.name === element.name) {
          element.message = "success";
          element.op = "";
        } else {
          element.message = "warn";
          element.op = "Password should match";
        }
        this.setState({
          confirmPassword: element,
        });
        break;
      default:
        break;
    }
  }
  validateInputs = () => {
    let { userName, email, firstName,lastName, password, confirmPassword } = this.state;
    if(userName.message === 'success' && email.message ==='success' && firstName.message ==='success' && lastName.message ==='success'
    && password.message ==='success' && confirmPassword.message ==='success' ){
      // console.log('false');
      // this.setState({
      //   verifyInput: true
      // })
      return false
    }
    else{
      return true
    }
  }
  submitData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register/",{
        username:this.state.userName.name,
        email:this.state.email.name,
        first_name:this.state.firstName.name,
        last_name:this.state.lastName.name,
        password:this.state.password.name
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        // alert(res.data.msg);
        let m = res.data.data ? res.data.data : res.data.username[0];
        let msg = {op:m,message:res.data.message}
        this.setState({
          res : msg
        })
      }
      )
  };
  submitData2 = (e) =>{
    alert('Created');
  }
  resetData = () =>{
    this.setState({
      userName: { name: "", message: "", op: "" },
      email: { name: "", message: "", op: "" },
      firstName: { name: "", message: "", op: "" },
      lastName: { name: "", message: "", op: "" },
      password: { name: "", message: "", op: "" },
      confirmPassword: { name: "", message: "", op: "" },
      verifyInput: false,
      res:{op:"",message:""}

    })
  }
  render() {
    const color = { color: "red", padding: "17px", fontSize: "18px" };
    const mark = <label style={color}>*</label>;
    // const userName = this.state.userName;
    let { userName, email, firstName,lastName, password, confirmPassword ,res} = this.state;
    // let s = userName.message;
    return (
      <>
      <Navbar />
      <div id="index">
        <div className="main">
          <h2 className="heading">RegistrationForm</h2>
          <span className={res.message}>{res.op}</span>
          <form className="regForm" onSubmit={this.submitData}>
            <div>
              <div className="inputBox">
                <input
                  type="text"
                  // className="userInput"
                  id={userName.message}
                  value={userName.name}
                  onChange={this.validateUsername}
                  required
                />
                <span>User Name{mark}</span>
              </div>
              <span className={userName.message}>{userName.op}</span>
            </div>
            <div>
              <div className="inputBox">
                <input
                  type="text"
                  // className="userInput"
                  id={email.message}
                  value={email.name}
                  onChange={this.validateEmail}
                  required
                />
                <span>Email{mark}</span>
              </div>
              <span className={email.message}>{email.op}</span>
            </div>
            <div>
              <div className="inputBox">
                <input
                  type="text"
                  // className="userInput"
                  id={firstName.message}
                  value={firstName.name}
                  onChange={this.validateFirstName}
                  required="required"
                />
                <span>First Name{mark}</span>
              </div>
              <span className={firstName.message}>{firstName.op}</span>
            </div>
            <div>
              <div className="inputBox">
                <input
                  type="text"
                  // className="userInput"
                  id={lastName.message}
                  value={lastName.name}
                  onChange={this.validateLastName}
                  required="required"
                />
                <span>Last Name{mark}</span>
              </div>
              <span className={lastName.message}>{lastName.op}</span>
            </div>
            <div>
              <div className="inputBox">
                {/* <input type="password" id="hide" /> */}
                <input
                  type="password"
                  className="pwd"
                  id={password.message}
                  value={password.name}
                  onChange={this.validatePassword}
                  required
                />
                <span>Password{mark}</span>
              </div>
              <span className={password.message}>{password.op}</span>
            </div>
            <div>
              <div className="inputBox2">
                <input
                  type="password"
                  // className="userInput"
                  id={confirmPassword.message}
                  value={confirmPassword.name}
                  onChange={this.validateConfirmPassword}
                  required
                />
                <span>Confirm Password{mark}</span>
              </div>
              <span className={confirmPassword.message}>
                {confirmPassword.op}
              </span>
            </div>
            <div>
              <div className="captchaClass">

                <button type="reset" className="subbtn" onClick={this.resetData}>Reset</button>
                <button type="submit" className="subbtn" disabled={this.validateInputs()}>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default SignUpForm;

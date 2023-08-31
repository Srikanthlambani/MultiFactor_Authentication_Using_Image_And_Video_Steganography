import React, { useState } from "react";
import "./LoginStyle.css";
import "./inputField.css";
import OtpVerify from "./OtpVerify";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function LoginFormFunc(props) {
    const [authLevel,setAuthLevel] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const [data,setData] = useState('');
    let navigate = useNavigate();
    const changeLevel = (event) => {
        let authValue = event.target.value;
        setAuthLevel(authValue);
    };
    const onChangeEmail = (event) =>{
      setEmail(event.target.value);
    }
    const onChangePassword = (event) =>{
      setPassword(event.target.value); 
    }
    const NavigateToVerify = (type,user) =>{
        navigate('/otpverify',{ state : {type:type,user:user}});
    };
  
    const submitData = (e) => {
      e.preventDefault();
      if(authLevel === ''){
        setMessage('warn');
        setData('Please choose the authentication level');
      }
      else{
      axios
      .post('http://127.0.0.1:8000/api/login/',{
        username:email,
        password:password,
        otp:authLevel
    }).then((res)=>{
      console.log(res)
      // console.log(res.headers)
      if(res.data.message === 'warn2'){
        setMessage(res.data.message);
        setData(res.data.data);
        console.log(message,data);
      }
      else{
        // console.log(res)
        NavigateToVerify(authLevel,res.data.user);
      }

    })
    }
    };
 
    const color = { color: "red", padding: "17px", fontSize: "18px" };
    const mark = <label style={color}>*</label>;
    return (
      <div className={props.ele} id={props.ele2}>
        <h2 className="heading">Login</h2>
        <span className={message}>{data}</span>
        <form className="regForm" onSubmit={submitData}>
          <div>
            <div className="inputBox">
              <input type="text"  onChange={onChangeEmail} required/>
              <span>Username{mark}</span>
            </div>
          </div>

          <div>
            <div className="inputBox">
              {/* <input type="password" id="hide" /> */}
              <input type="password" className="pwd"  onChange={onChangePassword} required/>
              <span>Password{mark}</span>
            </div>
          </div>
          <div>
            <select
              name="authenticationLevel"
              id="authLevelSelect"
              onChange={changeLevel}
              value={authLevel}
              required
            >
              <option >Choose Authentication Level</option>
              <option value='otp'>Digit OTP</option>
              <option value='image'>Image OTP</option>
              <option value='video'>Video OTP</option>
            </select>
          </div>
          {/* {authType} */}
          <div id="urls">
            <Link to="/forgotPassword">Forgot Password</Link>
            <Link to="/signup">Don't have account?</Link>
          </div>
          <div>
            <div className="captchaClass">
              <input type="checkbox" id="captcha" required />
              <label id="captchaText">Not a Robot</label>
              {/* <button className="subbtn" type="submit" onClick={submitData}>
                Login
              </button> */}
              <input className="subbtn" type="submit" value='Submit'/>
            </div>
          </div>
        </form>
      </div>
    );
  }
export default LoginFormFunc;

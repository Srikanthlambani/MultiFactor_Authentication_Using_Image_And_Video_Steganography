import React, { useState } from "react";
import Footer from "./Footer";
import "./ForgotPasswordStyle.css";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordForm(){
  
  let [email,setEmail] = useState('');
  let navigate = useNavigate();
  const [authLevel,setAuthLevel] = useState('');
  const [message,setMessage] = useState('');
  const [data,setData] = useState('');
  const color = { color: "red", padding: "17px", fontSize: "18px" };
  const mark = <label style={color}>*</label>;

  const changeLevel = (event) => {
    let authValue = event.target.value;
    setAuthLevel(authValue);
  };
  const NavigateToVerify = (type,user) =>{
    navigate('/otpverify',{ state : {type:type,user:user}});
};
  function submitData(e){
    e.preventDefault();
    axios
      .post('http://127.0.0.1:8000/api/forgot/',{
        email:email,
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
  return(
    <>
      <Navbar />

      <div id="index">
        <div className="forgotMain">
          <h2 className="heading">Forgot Password</h2>
        <span className={message}>{data}</span>
          <form className="regForm" id="regForm" onSubmit={submitData}>
            <div>
              <div className="inputBox">
                <input
                  type="text"
                  className="pwd"
                  onChange={(e) =>{
                    setEmail(e.target.value)
                  }}
                  required
                />
                <span>Email{mark}</span>
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
            <div>
              <div className="captchaClassForgot">
                <button type="submit" className="subbtn">
                  Verify
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      </>
  )
}

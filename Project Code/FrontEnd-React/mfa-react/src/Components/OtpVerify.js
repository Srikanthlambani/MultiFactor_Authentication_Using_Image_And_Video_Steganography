import React, { Component, useState } from 'react';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function OtpVerify(){
  const data = useLocation();
  const navigate = useNavigate();
  const [otp,setOtp] = useState();
  // let [videoFile,setvideoFile] = useState('');

  // const [fileData,setFile] = useState();
  // console.log(data);
  const otpChange = (event) => {
    setOtp(event.target.value);
  }
  function encodeImage(event){
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function(){
      // console.log('Result',reader.result)
      // setFile(reader.result)
      setOtp(reader.result)
      // console.log(fileData[22])
    }
    reader.readAsDataURL(file);
  }
  function encodeVideo(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event) => {
        var media = event.target.result;

        setOtp(media);
        console.log(media);
    };
    reader.readAsDataURL(file);
}
  const otpType = () =>{
    if(data.state === null){
      return <div> <Link to='/login'>Go to Login</Link>
        </div>
    }
    else if(data.state.user === ''){
      return <div> <Link to='/login'>Go to Login</Link>
        </div>
    }
    else if(data.state.type === 'otp' && data.state.user != null){
      return (<div className="forgotMain">
      <h2 className="heading">Enter Your OTP</h2>
      <form className="regForm" id="regForm">
      <div className="inputBox"><input type='number' min='1000' max='9999' placeholder='Enter OTP' value={otp} onChange={otpChange} required/></div>
        <button type='submit' className="subbtn" onClick={submitData}>Verify</button>
      </form>
    </div>)
    }
    else if((data.state.type === 'image') && data.state.user != null){
      return ( <div className="forgotMain">
      <h2 className="heading">Upload the <span className='warn'>Image</span></h2>
      <form className="regForm" id="regForm">
      <input type='file' accept='image/png' onChange={encodeImage} required/>
        <button type='submit' className="subbtn" onClick={submitData}>Verify</button>
      </form>
    </div>)
    }
    else if((data.state.type === 'video') && data.state.user != null){
      return ( <div className="forgotMain">
      <h2 className="heading">Upload the <span className='warn'>Video</span></h2>
      <form className="regForm" id="regForm">
      <input type='file' accept='video/*' onChange={encodeVideo} required/>
        <button type='submit' className="subbtn" onClick={submitData}>Verify</button>
      </form>
    </div>)
    }
  }
  const submitData = (e) => {
    e.preventDefault();
    if(data.state.type === 'otp'){
      axios
      .post('http://127.0.0.1:8000/api/VerifyOtp/',
      {
        otp:otp,
      },
      {
        headers:{
          'username':data.state.user
        }
      })
      .then((res)=>{
        console.log(res)
        if(res.data.message === 'success'){
          // // alert('Welcome Mr.'+ data.state.user);
          // console.log('Executing...........')
          // console.log(res.data)
          navigate('/user-details',{state:res.data}); 
        }
        else{
          alert('Wrong otp...');
        }
      }
    )
    }
    else if(data.state.type === 'image'){
      axios
      .post('http://127.0.0.1:8000/api/VerifyImage/',
      {
        image:otp,
      },
      {
        headers:{
          'username':data.state.user
        }
      })
      .then((res)=>{
        console.log(res)
        if(res.data.message === 'success'){
          // alert('Welcome Mr.'+ data.state.user);
          navigate('/user-details',{state:res.data}); 

        }
        else{
          alert('Upload valid Image...');
        }
      }
    )
    }
    else if(data.state.type === 'video'){
      axios
      .post('http://127.0.0.1:8000/api/VerifyVideo/',
      {
        video:otp,
      },
      {
        headers:{
          'username':data.state.user
        }
      })
      .then((res)=>{
        console.log(res)
        if(res.data.message === 'success'){
          // alert('Welcome Mr.'+ data.state.user);
          navigate('/user-details',{state:res.data}); 

        }
        else{
          alert('Upload valid Video...');
        }
      }
    )
    }
   }
  return (<>

{otpType()}
  </>
     
    )
}

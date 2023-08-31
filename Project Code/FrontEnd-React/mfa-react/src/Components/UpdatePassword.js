import React, { useEffect, useState} from 'react'
import Footer from './Footer';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';

function UpdatePassword() {
    const userData = useLocation();
    // console.log(userData)
    const navigate = useNavigate();
    let [password,setPassword] = useState('');
    let [confirmpassword,setConfirmPassword] = useState('');
    let [message,setMessage] = useState('');
    let [data,setData] = useState('');
    let datttt = 0
    const color = { color: "red", padding: "17px", fontSize: "18px" };
    const mark = <label style={color}>*</label>;

    const onChangePassword = (event) =>{
        setPassword(event.target.value); 
      }
    const ConfirmPassword = (event) =>{
        setConfirmPassword(event.target.value); 
      }
      function submitData(e){
        e.preventDefault();
        if(password === confirmpassword){
            axios
            .post('http://127.0.0.1:8000/api/updatePassword/',{
                password:password,
                username: userData.state.username
            })
            .then((res)=>{
                if(res.data.message === 'success'){

                    alert(res.data.data);
                }
                else{
                    alert(res.data.data);
                }
            })
            // console.log(userData.state.username)
        }
        else{
            alert('Both Password and Confirm Password should match..')
        }
      }
  return (
    <>
     <div id="index">
    <div className="main">
    <h2>Update Password</h2>
    <span className={message}>{data}</span>
    <form className="regForm">
    <div>
        <div className="inputBox">
            <input type="password" className="pwd"  onChange={onChangePassword} required/>
            <span>Password{mark}</span>
        </div>
    </div>
    <div>
        <div className="inputBox">
            <input type="password" className="pwd"  onChange={ConfirmPassword} required/>
            <span>Confirm{mark}</span>
        </div>
    </div>
    <button type='submit' className='subbtn' onClick={submitData}>Update</button>
    </form>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default UpdatePassword;
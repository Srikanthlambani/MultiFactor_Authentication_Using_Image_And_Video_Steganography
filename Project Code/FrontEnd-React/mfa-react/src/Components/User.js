import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './userDetails.css';
export default function User() {
    const data = useLocation();
    const navigate = useNavigate();
    let styles = {align:'center'}
    function Logout(){
      navigate('/login');
    }
  return (
    <div className='userMain'>
    <h2 className="userHeading heading">Welcome {data.state.username}</h2>
    <table className='userTable'>
      <tr>
        <th>
          UserName
        </th>
        <th>
          Email
        </th>
        <th>
          FirstName
        </th>
        <th>
          LastName
        </th>
      </tr>
      <tr>
        <td>
    <div>{data.state.username}</div>

        </td>
        <td>
    <div>{data.state.email}</div>

        </td>
        <td>
    <div>{data.state.first_name}</div>

        </td>
        <td>
    <div>{data.state.last_name}</div>
        </td>
      </tr>
    </table>
    <button className="userLogout" onClick={Logout}>LogOut</button>
    </div>
  )
}

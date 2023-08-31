import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Test() {
  let [authValue,setAuthValue] = useState();
  let navigate = useNavigate();
  const navigaeTo = () =>{
    navigate('/about');
  }
  return (
    <div>
      <button onClick={navigaeTo}>Navigate</button>
    </div>
  )
}

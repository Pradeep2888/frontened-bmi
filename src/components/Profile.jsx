import axios from 'axios';
import React from 'react'

function Profile() {

  const showProfile=()=>{
    axios.get('https://backend-test-bmi.onrender.com/getData')
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  }

  
  return (
    <div>
      <button onClick={showProfile} >Show All Data</button>
    </div>
  )
}

export default Profile
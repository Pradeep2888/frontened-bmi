import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Signup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=()=>{
        const payload={
            name,
            email,
            password
        }
        axios.post('https://backend-test-bmi.onrender.com/signup', payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  return (
    <div>
        <h1>Signup page</h1>
        <div>
            <input type="name" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    </div>
  )
}

export default Signup
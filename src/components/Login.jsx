import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=()=>{
        const payload={
            email,
            password
        }
        axios.post('https://backend-test-bmi.onrender.com/login', payload)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
    }
  return (
    <div>
        <h1>Login page</h1>
        <div>
            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit} >Login</button>
        </div>
    </div>
  )
}

export default Login
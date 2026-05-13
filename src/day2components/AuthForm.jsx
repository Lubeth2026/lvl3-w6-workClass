
import React, { useState } from 'react'

function AuthForm() {
//Authentication State//
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
  return (
    <div className="auth-container">
      <label htmlFor="email">Email:
        <input type="text" name="email" id="email" value={email} 
        onChange={(event)=> setEmail(event.target.value)}/>
      </label>
      <label htmlFor="password">Password:
        <input type="text" name="password" id="password" value={password} 
        onChange={(event)=> setPassword(event.target.value)}/>
      </label>
    </div>
  )
}

export default AuthForm
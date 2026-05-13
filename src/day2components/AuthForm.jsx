
import React, { useState } from 'react'
import { supabase } from '../utils/supabase'

function AuthForm({setCurrentUser}) {
//Authentication State//
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

//Sign Up Function//
async function signup() {
    try {
       const {data, error} = await supabase.auth.signUp({ email, password });
       if(error){ alert(error.message);
        return;
       }
       if(data.session){ setCurrentUser(data.user);}
    } catch (error) {
       console.log(error) 
    }
    signup();
}
//Login Function//
async function login() {
    try {
        const {data, error} = await supabase.auth.signInWithPassword({ email, password });
        if(error){ alert(error.message);
            return;
        }
        setCurrentUser(data.user);
    } catch (error) {
        console.log(error)
    }
}
//Logout Function//
async function logout() {
    try {
        await supabase.auth.signOut();
        setCurrentUser(null);
    } catch (error) {
        console.log(error)
    }
}

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

      <button onClick={signup}>Sign Up</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AuthForm
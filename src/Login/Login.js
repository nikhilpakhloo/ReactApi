import React, { useState } from 'react'
import './login.scss';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [username ,setUserName] = useState('')
    const [password ,setPassword] = useState('')
    const navigate = useNavigate();
    const handlelogin = (e)=>{
        e.preventDefault();
        const usr = localStorage.getItem('registerUser');
        const storedUser = JSON.parse(usr)
        if(username===storedUser.username){
          localStorage.setItem("UserId", storedUser.id)
          localStorage.setItem("UserName", storedUser.username)
       

          navigate('/navbar')
        }else{
          alert('Login failed')
        }

    };
return (
    <div>
         <div className="signup-form-container">
      <form className="signup-form" onSubmit={handlelogin}>
       
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">LogIn</button>
      </form>
    </div>
    </div>
    
  )
}

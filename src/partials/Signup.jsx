import React, { useState } from 'react'
import './signup.css'

const Signup = () => {
    const [action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
        <div className='header'>
        <div className='text'>
            {action}
        </div>
        </div>
       <div className='inputs'>
        {action==="Login" || action==="Lost Password"?<div></div>: <div className='input'>
        <input type='text' placeholder='username' required/>
        </div>}
       
        {action==="Login" || action==="Lost Password"?<div></div>: <div className='input'>
        <input type='date' placeholder='dd|mm|yyyy' required/>
        </div>}

        <div className='input'>
        <input type='email' placeholder='email' required/>
        </div>

        {action==="Lost Password"?<div></div>:<div className='input'>
        <input type='password' placeholder='password' required/>
       </div>}

       {action==="Lost Password"?<div></div>:<div className='input'>
        <input type='password' placeholder='Re enter password' required/>
       </div>}
       </div>

       
       
        <div className='submit-container'>
            
            <div className={action==='Login' || action==="Lost Password"?'submit gray':'submit'} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==='Sign Up' || action==="Lost Password"?'submit gray':'submit'}  onClick={()=>{setAction("Login")}}>Login</div>
           
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>
            <div className='forgot'>Forgot password? </div> <div className={ action==='Login' || action==='Sign Up'?'submit gray':'submit'}  onClick={()=>{setAction("Lost Password")}}>Click here</div>
       </div>}
       </div>
        
        
  )
}

export default Signup
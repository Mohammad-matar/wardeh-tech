import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import "./style.css"

export default function Login() {
  const [inputType, setInputType] = useState("password");

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <div className='login_container'>
      <div className='main_login_container'>
        <div className='login_header'>
          <img src={logo} alt="wardeh_logo" />
          <h3 className='header_text'>Log in to our online store</h3>
        </div>

        <div >
          <form className='login_inputs_container'>
            <input type="text" placeholder="Email Address" />
            <div className='login_pw_input'>
              <input
                className="input"
                name="password"
                type={inputType}
                placeholder="Password"
                required
              />
              {inputType === "password" ? (
                <AiOutlineEye
                  className='login-eye'
                  onClick={() => togglePassword()}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className='login-eye'
                  onClick={() => togglePassword()}
                />
              )}
            </div>

            <button className='login_btn'>
              Login
            </button>
            <div className='login-foot'>
              <p>don’t have an account ? <span> signup</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

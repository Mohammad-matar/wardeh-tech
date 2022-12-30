import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Components/auth';
import axios from 'axios';
import logo from '../../images/logo.png'
import "./style.css"


export default function Login() {
  const [inputType, setInputType] = useState("password");
  const [data, setData] = useState({})

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("https://fakestoreapi.com/auth/login", data)
      .then(res => {
        auth.login(res.data.token);
        navigate('/');
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='login_container'>
      <div className='main_login_container'>
        <div className='login_header'>
          <img src={logo} alt="wardeh_logo" />
          <h3 className='header_text'>Log in to our online store</h3>
        </div>

        <div >
          <form className='login_inputs_container' onSubmit={handleLogin}>
            <input type="text" placeholder="Username" name='username' required onChange={handleChange} />
            <div className='login_pw_input'>
              <input
                className="input"
                name="password"
                type={inputType}
                placeholder="Password"
                required
                onChange={handleChange}
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

            <button className='login_btn' type='submit'>
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

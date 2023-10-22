import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import backgroundImage from '../images/backgroundImage.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/AuthService';

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const submitLogin = async () => {
    try {
      await loginUser(loginDetails.email, loginDetails.password);
      navigate('/dashboard');
    }
    catch(e){
      alert('Invalid Credentials');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-customgrey" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex items-center flex-col w-full sm:w-96'>
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 font-jost">
        <h2 className="text-lg text-customblack font-semibold mb-2 text-center">Login Pro System</h2>
        <hr className="mb-4 border-gray-300" />
        <div className="mb-4">
          <label htmlFor="username" className="block text-customblack text-sm mb-1">Email Address</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setLoginDetails({...loginDetails, email: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-customblack text-sm mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})}
              className="w-full px-3 py-2 border font-medium text-black rounded-lg focus:outline-none focus:border-btnpurple hover:border-btnpurple"
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 focus:outline-none hover:text-btnpurple"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiOutlineEye className="w-5 h-5" /> : <AiOutlineEyeInvisible className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="keepLoggedIn" className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="keepLoggedIn"
              className="mr-2 cursor-pointer"
              checked={isChecked}
              onChange={handleCheckboxClick}
            />
            <span className="text-customtextgrey text-[13px]">Keep Me Logged In</span>
          </label>
          <NavLink to='/password-reset' className="text-btnpurple hover:underline text-[13px]">Forgot Password?</NavLink>
        </div>
        <button
          disabled={!loginDetails.email || !loginDetails.password}
          onClick={submitLogin}
          className="w-full bg-btnpurple text-white py-2 rounded-lg hover:bg-btnpurple transition duration-300 focus:outline-none"
        >
          Login
        </button>
      </div>
      <div className='text-sm px-3 py-3 bg-customwhite'>Don't have an account? <NavLink to='/person-register' className="text-btnpurple hover:underline" >Person Register</NavLink> or <NavLink to='/business-register' className="text-btnpurple hover:underline" >Business Register</NavLink></div>
      </div>
    </div>
  );
}

export default Login;

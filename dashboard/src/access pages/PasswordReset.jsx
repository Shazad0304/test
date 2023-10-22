import React, { useState } from 'react';
import backgroundImage from '../images/backgroundImage.png';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send reset email or perform validation
    setIsSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-customgrey" style={{ backgroundImage: `url(${backgroundImage})` }}>
       <div className='flex items-center flex-col w-full sm:w-96 font-jost'>
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-medium mb-4">Reset Your Password</h2>
        {isSubmitted ? (
          <p className="mb-4 text-green-500">Password reset email sent!</p>
        ) : (
          <>
            <p className="mb-4">
              Enter your email address below and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block font-normal mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-sm focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-btnpurple text-white py-2 rounded-lg hover:bg-btnpurple transition duration-300 focus:outline-none"
              >
                Send Reset Link
              </button>
            </form>
          </>
        )}
      </div>
      <div className='w-full text-sm py-3 bg-customwhite text-center'><NavLink to='/' className="text-btnpurple hover:underline flex items-center justify-center gap-1" ><span><AiOutlineArrowLeft className='text-base'/></span> <span>Go back</span></NavLink></div>
      </div>
    </div>
  );
};

export default PasswordReset;

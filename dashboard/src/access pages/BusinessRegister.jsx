import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import backgroundImage from '../images/backgroundImage.png';
import { NavLink } from 'react-router-dom';

const BusinessRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to server or perform validation
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-customgrey" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex items-center flex-col w-full sm:w-96'>
     <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 font-jost">
        <h2 className="text-2xl font-medium mb-4 text-center">Business Registration</h2>
        <hr className="mb-4 border-gray-300" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-normal text-sm mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-btnpurple hover:border-btnpurple focus:outline-none font-normal"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessName" className="block font-normal text-sm mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-btnpurple hover:border-btnpurple focus:outline-none font-normal"
              placeholder="Business Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-normal text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-btnpurple hover:border-btnpurple focus:outline-none font-normal"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-normal text-sm mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-btnpurple hover:border-btnpurple focus:outline-none font-normal"
              placeholder="Phone"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-normal text-sm mb-1">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-btnpurple hover:border-btnpurple focus:outline-none font-normal"
              rows="3"
              placeholder="Address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-normal text-sm mb-1">
              Password
            </label>
            <input
               type={showConfirmPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-btnpurple hover:border-btnpurple focus:outline-none font-normal"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block font-normal text-sm mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:border-btnpurple hover:border-btnpurple focus:outline-none font-normal"
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500 focus:outline-none"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <AiOutlineEye className="w-5 h-5" /> : <AiOutlineEyeInvisible className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-btnpurple text-white py-2 rounded-lg hover:bg-btnpurple transition duration-300 focus:outline-none"
          >
            Create Account
          </button>
        </form>
      </div>
      <div className='w-full text-sm py-3 bg-customwhite text-center'>Already have account? <NavLink to='/' className="text-btnpurple hover:underline" >Login</NavLink></div>
      </div>
    </div>
  );
};

export default BusinessRegister;

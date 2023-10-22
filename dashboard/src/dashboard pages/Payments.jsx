import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

const Payments = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [formData, setFormData] = useState({
    user: '',
    paymentMethod: '',
    amount: '',
    notes: '',
  });

  // const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here

    // Simulate a successful submission
    setSuccessMessage('Payment submitted successfully!');
  };
    const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleConfirm = () => {
    // Add your logic here to set the amount and message
    setAmount(' '); // Example: You can replace '500' with your actual amount
    setMessage('Top Up Limit Set successfully');
    
    // Close the modal immediately
    closeModal();

    // Set a timeout to hide the message after a few seconds
    setTimeout(() => {
      setMessage('');
    }, 3000); // Hide the message after 3 seconds (adjust as needed)
  };

  return (
    <section className="flex bg-customgrey mx-auto max-w-full">
    <div className="w-[17.5] ">
      <SideBar />
    </div>
    <div className="text-xl text-gray-900 font-jost font-semibold w-full ">
      <Navbar />
      <div className="container p-4 h-screen">
        <div className="flex justify-between items-center ">
          <h1 className="sm:text-xl text-sm">Top Up</h1>
          <div className="text-sm text-customicongrey">
            <NavLink to="/">Top Up</NavLink> - Account
          </div>
        </div>
        {message && (
        <div className="m-4 bg-[#DBEFE1] text-[#01B81A] font-normal px-5 py-[10px] text-sm rounded">
          {message}
        </div>
      )}
        <div className="bg-white rounded-lg my-5">
         <div className='flex justify-between items-center px-6 py-4'>
         <h3 className="text-customblack font-medium sm:text-lg text-base">Top Up Account</h3>
         <div className=''><buttton onClick={openModal} className="cursor-pointer bg-btnpurple text-white text-[13px] font-medium px-4 py-[5.5px] flex items-center gap-2"><AiOutlinePlus className='text-white'/>Set Account Limits</buttton></div>
         {isModalOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[620px]">
           <div className='flex items-center justify-between px-7 py-[18px]'>
           <h2 className="text-lg font-semibold">Adding Topup Amount Limit</h2>
            <button onClick={closeModal} className="text-customblack text-base hover:text-gray-700" > <AiOutlineClose/> </button>
           </div>
           <hr/>
           <form className='p-7'>
           <label htmlFor="setamount" className="text-sm text-customblack font-medium block mb-[10px]">
           Set Amount
          </label>
           <input
              type="number"
              id='setamount'
              name='setamount'
              placeholder="Enter Amount To Set Limit. Previous Limit is 200"
              className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              
            />
            <hr className='mt-4'/>
            <div className="mt-4 flex justify-end gap-2">
            <button
                onClick={handleConfirm}
                className="bg-btnpurple text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="bg-[#5840FF] text-white py-3 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
              >
                Close
              </button>
            </div>
           </form>
          </div>
        </div>
      )}
         </div>
          <hr/>
          <div className="px-6 py-4">
            {successMessage && (
        <div className="bg-green-200 text-green-800 p-2 rounded mb-4">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="user" className="text-sm text-customblack font-medium block mb-[10px]">
            Select User
          </label>
          <select
            id="user"
            name="user"
            className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
            onChange={handleChange}
            value={formData.user}
            required
          >
            <option value="">Select User</option>
            {/* Add user options */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="text-sm text-customblack font-medium block mb-[10px]">
            Select Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="cursor-pointer w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
            onChange={handleChange}
            value={formData.paymentMethod}
            required
          >
            <option value="" className='font-bold cursor-pointer'>Select Payment Method</option>
            <option value="paypal" className='cursor-pointer'>paypal</option>
            <option value="stripe" className='cursor-pointer'>stripe</option>
            <option value="wallet" className='cursor-pointer'>wallet</option>
            {/* Add payment method options */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="text-sm text-customblack font-medium block mb-[10px]">
            Enter Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
            onChange={handleChange}
            value={formData.amount}
            required
            min="0"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="text-sm text-customblack font-medium block mb-[10px]">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
            onChange={handleChange}
            value={formData.notes}
          />
        </div>
        <div className="text-center sm:text-right">
          <button
            type="submit"
            className="bg-btnpurple text-white py-2 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
          >
            Create
          </button>
        </div>
      </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </section>
  )
}

export default Payments

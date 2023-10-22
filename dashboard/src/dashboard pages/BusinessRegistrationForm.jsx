import React from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BusinessRegistrationForm = () => {
  return (
    <>
      <section className="flex bg-customgrey mx-auto max-w-full">
        <div className="w-[17.5] ">
          <SideBar />
        </div>
        <div className="text-xl text-gray-900 font-jost font-semibold w-full ">
          <Navbar />
          <div className="container p-4 h-fit">
            <div className="flex justify-between items-center ">
              <h1 className="sm:text-xl text-sm">Business</h1>
              <div className="text-sm text-customicongrey">
                <NavLink to="/">Business</NavLink> - Registration
              </div>
            </div>
            <div className="bg-white rounded-lg my-5">
              <div className="flex justify-between items-center px-6 py-4">
                <h3 className="text-customblack font-medium sm:text-lg text-base">
                  Submit Business Registration
                </h3>
                <h3 className="text-customblack font-medium sm:text-lg text-base">
                  Fees - AED 500
                </h3>
              </div>
              <hr />
              <div className="px-6 py-4">
                <form className="">
                  <div className="mb-4">
                    <label
                      htmlFor="user"
                      className="text-sm text-customblack font-medium block mb-[10px]"
                    >
                      Select User
                    </label>
                    <select
                      id="user"
                      name="user"
                      className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                      required
                    >
                      <option value="">Select User</option>
                      {/* Add user options */}
                    </select>
                  </div>
                  <div className="sm:flex sm:items-center gap-4 sm:mb-4 mb-2">
                    <div className="w-full ">
                      <label
                        htmlFor="title"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                        min="0"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="firstname"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                        min="0"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="lastname"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="sm:flex sm:items-center gap-4 sm:mb-4 mb-2 ">
                    <div className="w-full ">
                      <label
                        htmlFor="businessname"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessname"
                        name="businessname"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                        min="0"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="licensetype"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        License Type
                      </label>
                      <div className="flex items-center gap-2 mb-[27px]">
                        <input
                          type="checkbox"
                          id="licensetype"
                          name="licensetype"
                          className="px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                          required
                          min="0"
                        />
                        <label
                          htmlFor="myCheckbox"
                          className="text-sm text-customblack font-normal block "
                        >
                          Mainland DED License
                        </label>
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="date"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="sm:flex sm:items-center gap-4 sm:mb-4 mb-2">
                    <div className="w-full ">
                      <label
                        htmlFor="contactnumber"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="contactnumber"
                        name="contactnumber"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                        min="0"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                        min="0"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="address"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:flex sm:items-center gap-4 sm:mb-4 mb-2">
                    <div className="w-full ">
                      <label
                        htmlFor="address2"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        Address2
                      </label>
                      <input
                        type="text"
                        id="address2"
                        name="address2"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"

                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="city"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="state"
                        className="text-sm text-customblack font-medium block mb-[10px]"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="w-full px-3 py-3 border rounded text-black text-sm font-normal focus:outline-none focus:border-btnpurple-500 hover:border-btnpurple"
                        required
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <button
                      type="submit"
                      className="bg-btnpurple text-white py-2 px-4 text-sm font-medium rounded hover:bg-btnpurple transition duration-300 focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default BusinessRegistrationForm;

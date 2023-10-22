import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const EjariApplication = () => {
  return (
    <>
      <section className="flex bg-customgrey mx-auto max-w-full">
        <div className="w-[17.5] ">
          <SideBar />
        </div>
        <div className="text-xl text-gray-900 font-jost font-semibold w-full ">
          <Navbar />
          <div className="container p-4 h-screen">
            <div className="flex justify-between items-center ">
              <h1 className="sm:text-xl text-sm">Ejari Application</h1>
              <div className="text-sm text-customicongrey">
                <NavLink to="/">Ejari Application</NavLink> - List
              </div>
            </div>
            <div className="bg-white rounded-lg my-5">
              <h3 className="text-customblack font-medium sm:text-lg text-base px-6 py-4">Ejari Application</h3>
              <hr/>
              <div className="text-customblack font-medium text-lg px-6 py-4">
                <h5 className="text-center text-{#666d92} mb-4 text-base font-normal">No Data found.</h5>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default EjariApplication;

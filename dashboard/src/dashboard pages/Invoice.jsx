import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Center from "../invoice components/Center";

const Invoice = () => {
  return (
    <>
      <section className="flex bg-customgrey mx-auto max-w-full">
        <div className="w-[17.5] ">
          <SideBar />
        </div>
        <div className="text-xl text-gray-900 font-jost font-semibold w-full ">
          <Navbar />
          <div className="container">
            <Center/>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Invoice;


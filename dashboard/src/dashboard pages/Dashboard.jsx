import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { FiTrendingUp, FiUsers } from "react-icons/fi";
import { AiOutlineArrowUp, AiOutlineDollar } from "react-icons/ai";
import { SiSpeedtest } from "react-icons/si";
import {LuWallet} from "react-icons/lu"
import { BsBank, BsCreditCard, BsBriefcase } from "react-icons/bs";
import {TbBrandPaypal} from "react-icons/tb"
import { BiTransferAlt } from "react-icons/bi";
import {PiUserThin} from "react-icons/pi"
import Footer from "../components/Footer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const [coltwoactiveTab, ColtwosetActiveTab] = useState(1);

  const coltwohandleTabClick = (tabNumber) => {
    ColtwosetActiveTab(tabNumber);
  };
  const [colthreeactiveTab, ColthreesetActiveTab] = useState(1);

  const colthreehandleTabClick = (tabNumber) => {
    ColthreesetActiveTab(tabNumber);
  };
  return (
    <>
      <section className="flex bg-customgrey dark:bg-[#141625] mx-auto max-w-full">
        <div className="w-[17.5] ">
          <SideBar />
        </div>
        <div className="text-xl text-gray-900 font-jost font-semibold w-full">
          <Navbar />
          <div className="container p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl dark:text-white">Dashboard</h1>
              <div className="text-sm text-customicongrey">
                <NavLink to="/">Home</NavLink> - Dashboard
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
              <div className="col-span-1 md:col-span-1 bg-white dark:bg-[#1e2139] p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 mt-[2px]">
                  <div className="text-3xl text-customblack dark:text-white">
                    4<p className="text-sm font-normal">Total Businesses</p>
                  </div>
                  <div className="bg-custombgcolor dark:bg-[#141625] p-3.5 rounded-2xl">
                    <FiTrendingUp className="text-btnpurple sm:text-[28px] text-[22px]" />
                  </div>
                </div>
                <div className="bg-customgrey dark:bg-[#141625] dark:text-white py-[10px] px-[15px] rounded-md font-normal text-sm ">
                  0 Unverified{" "}
                  <NavLink className="text-btnpurple">View All</NavLink>
                </div>
              </div>

              <div className="col-span-1 md:col-span-1 bg-white dark:bg-[#1e2139] p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 mt-[2px]">
                  <div className="text-3xl text-customblack dark:text-white">
                    8<p className="text-sm font-normal">Total Persons</p>
                  </div>
                  <div className="bg-custombgcolor dark:bg-[#141625] p-3.5 rounded-2xl">
                    <FiUsers className="text-[#5840FF] sm:text-[28px] text-[22px]" />
                  </div>
                </div>
                <div className="bg-customgrey dark:dark:bg-[#141625] dark:text-white py-[10px] px-[15px] rounded-md font-normal text-sm ">
                  0 Unverified{" "}
                  <NavLink className="text-btnpurple">View All</NavLink>
                </div>
              </div>

              <div className="col-span-1 md:col-span-1 bg-white dark:bg-[#1e2139] p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 mt-[2px]">
                  <div className="text-3xl text-customblack dark:text-white">
                    AED 2500.00
                    <p className="text-sm font-normal">Total Sales</p>
                  </div>
                  <div className="bg-custombgcolor dark:bg-[#141625] p-3.5 rounded-2xl">
                    <AiOutlineDollar className="text-[#01BB93] sm:text-[28px] text-[22px]" />
                  </div>
                </div>
                <div className="bg-customgrey dark:bg-[#141625] py-[10px] px-[15px] rounded-md font-medium text-sm text-[#FE0F0F]">
                  Paid by clients for services
                </div>
              </div>

              <div className="col-span-1 md:col-span-1 bg-white dark:bg-[#1e2139] p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 mt-[2px]">
                  <div className="text-3xl text-customblack  dark:text-white">
                    AED 2595.25
                    <p className="text-sm font-normal">Total Income</p>
                  </div>
                  <div className="bg-[#E5FCFD] dark:bg-[#141625] p-3.5 rounded-2xl">
                    <SiSpeedtest className="text-[#00E4EC] sm:text-[28px] text-[22px]" />
                  </div>
                </div>
                <div className="bg-customgrey dark:bg-[#141625] py-[10px] px-[15px] rounded-md font-medium text-sm text-[#01BB93] flex items-center gap-1">
                  <AiOutlineArrowUp /> Amount deposited by clients
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-1 bg-white dark:bg-[#1e2139] rounded-lg">
                <div className="mb-4 flex justify-between items-center px-6 pt-5 pb-0">
                  <p className="sm:text-lg text-sm font-medium text-customblack dark:text-white">
                    Latest Transactions
                  </p>
                  <div className="flex space-x-0 justify-end">
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        activeTab === 1
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => handleTabClick(1)}
                    >
                      Today
                    </button>
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        activeTab === 2
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => handleTabClick(2)}
                    >
                      Week
                    </button>
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        activeTab === 3
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => handleTabClick(3)}
                    >
                      Month
                    </button>
                  </div>
                </div>
                <hr />
                {/* Column 1 Content */}
                <div className="p-6">
                  {/* Content for the active tab */}
                  {activeTab === 1 && (
                    <table className="min-w-full table-auto ">
                      <tbody>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <LuWallet className="text-btnpurple "/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Kamran Ismail</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">USD 698.25</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <LuWallet className="text-btnpurple "/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Muhammad Khalifa</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#FE0F0F] text-sm font-normal text-right">AED 200.00</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <LuWallet className="text-btnpurple "/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Azam ali</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">AED 700.00</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <LuWallet className="text-btnpurple "/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Kamran Ismail</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">AED 1,197.00</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <LuWallet className="text-btnpurple "/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Kamran Ismail</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">AED 1,197.00</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  {activeTab === 2 && 
                    <table className="min-w-full table-auto">
                      <tbody>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BsBank className="text-btnpurple"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Bank Transfer</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <TbBrandPaypal className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Paypal</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCF1D1] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <LuWallet className="text-[#1BBC67]"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Wallet</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#FE0F0F] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#FEE8CE] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BsCreditCard className="text-[#FA8B0C]"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Credit Card</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#DED9FF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BiTransferAlt className="text-[#5851FF]"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Transfer</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  }
                  {activeTab === 3 && 
                    <table className="min-w-full table-auto">
                      <tbody>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BsBank className="text-btnpurple"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Bank Transfer</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <TbBrandPaypal className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Paypal</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCF1D1] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <LuWallet className="text-[#1BBC67]"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Wallet</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#FE0F0F] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#FEE8CE] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BsCreditCard className="text-[#FA8B0C]"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Credit Card</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#DED9FF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BiTransferAlt className="text-[#5851FF]"/>
                              </div>
                              <div className="ml-4">
                                <h6 className="text-[15px] text-customblack dark:text-white leading-3">Transfer</h6>
                                <span className="text-[15px] text-customtextgrey font-normal dark:text-white">10 mins ago</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">+$573</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  }
                </div>
              </div>
              <div className="col-span-1 md:col-span-1 bg-white dark:bg-[#1e2139] rounded-lg">
              <div className="mb-4 flex justify-between items-center px-6 pt-5 pb-0">
                  <p className="sm:text-lg text-sm font-medium text-customblack dark:text-white">
                  Requests Overview
                  </p>
                  <div className="flex space-x-0 justify-end">
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        coltwoactiveTab === 1
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => coltwohandleTabClick(1)}
                    >
                      Today
                    </button>
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        coltwoactiveTab === 2
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => coltwohandleTabClick(2)}
                    >
                      Week
                    </button>
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        coltwoactiveTab === 3
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => coltwohandleTabClick(3)}
                    >
                      Month
                    </button>
                  </div>
                </div>
                <hr />
                 {/* Column 2 Content */}
                 <div className="p-6">
                  {/* Content for the active tab */}
                  {coltwoactiveTab === 1 && (
                   <p>hello</p>
                  )}
                  {coltwoactiveTab === 2 && (
                   <p>hello 2</p>
                  )}
                  {coltwoactiveTab === 3 && (
                   <p>hello 3</p>
                  )}
                  </div>
              </div>
              <div className="col-span-1 md:col-span-1 bg-white dark:bg-[#1e2139] rounded-lg">
              <div className="mb-4 flex justify-between items-center px-6 pt-5 pb-0">
                  <p className="sm:text-lg text-sm font-medium text-customblack dark:text-white">
                  Request List
                  </p>
                  <div className="flex space-x-0 justify-end">
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        colthreeactiveTab === 1
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => colthreehandleTabClick(1)}
                    >
                      Today
                    </button>
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        colthreeactiveTab === 2
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => colthreehandleTabClick(2)}
                    >
                      Week
                    </button>
                    <button
                      className={`px-0 py-0 rounded-lg ${
                        colthreeactiveTab === 3
                          ? "bg-custombgcolor dark:bg-[#141625] dark:text-white text-btnpurple text-[13px] px-[12px] py-0.5"
                          : "text-customtextgrey text-[13px] px-[12px] py-0.5"
                      }`}
                      onClick={() => colthreehandleTabClick(3)}
                    >
                      Month
                    </button>
                  </div>
                </div>
                <hr />
                {/* Column 3 Content */}
                <div className="p-6">
                  {/* Content for the active tab */}
                  {colthreeactiveTab === 1 && (
                    <table className="min-w-full table-auto ">
                      <tbody>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BsBriefcase className="text-btnpurple"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='business-registration' className="text-[15px] text-btnpurple dark:text-white">Business Registration</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Business</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='offer-letter' className="text-[15px] text-btnpurple dark:text-white leading-3">Offer Letter</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">6</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='labour-insurance' className="text-[15px] text-btnpurple dark:text-white leading-3">Labour Insurance</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='final-contract-submission'  className="text-[15px] text-btnpurple dark:text-white leading-3"> Final Contract Submission</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  {colthreeactiveTab === 2 && (
                    <table className="min-w-full table-auto ">
                      <tbody>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BsBriefcase className="text-btnpurple"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='business-registration' className="text-[15px] text-btnpurple dark:text-white">Business Registration</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Business</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='offer-letter' className="text-[15px] text-btnpurple dark:text-white leading-3">Offer Letter</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">6</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='labour-insurance' className="text-[15px] text-btnpurple dark:text-white leading-3">Labour Insurance</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='final-contract-submission'  className="text-[15px] text-btnpurple dark:text-white leading-3"> Final Contract Submission</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  {colthreeactiveTab === 3 && (
                    <table className="min-w-full table-auto ">
                      <tbody>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-custombgpurple dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <BsBriefcase className="text-btnpurple"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='business-registration' className="text-[15px] text-btnpurple dark:text-white">Business Registration</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Business</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='offer-letter' className="text-[15px] text-btnpurple dark:text-white leading-3">Offer Letter</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">6</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='labour-insurance' className="text-[15px] text-btnpurple dark:text-white leading-3">Labour Insurance</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5">
                            <div className="flex items-center">
                              <div className="bg-[#CCEEFF] dark:bg-[#141625] bg-primary text-primary w-12 h-12 flex items-center justify-center rounded-md">
                               <PiUserThin className="text-[#00AAFF]"/>
                              </div>
                              <div className="ml-4">
                                <NavLink to='final-contract-submission'  className="text-[15px] text-btnpurple dark:text-white leading-3"> Final Contract Submission</NavLink>
                                <div className="text-[15px] text-customtextgrey font-normal dark:text-white">Person</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5">
                            <div className="text-[#01B81A] text-sm font-normal text-right">1</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

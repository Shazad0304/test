import React, { useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import authornav from "../images/authornav.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import UseDarkMode from "../hooks/UseDarkMode";
import { motion } from "framer-motion";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";

const Navbar = () => {
  const [colorTheme, setTheme] = UseDarkMode();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10,
  };

  const [menuOpen2, setMenuOpen2] = useState(false);

  const openMenu2 = () => {
    setMenuOpen2(true);
  };

  const closeMenu2 = () => {
    setMenuOpen2(false);
  };
  return (
    <>
      <nav className="bg-white dark:bg-[#1e2139] duration-300 drop-shadow-sm sm:p-4 p-2 w-full font-jost">
        <div className="mx-auto flex justify-end items-center text-sm">
          <div className="space-x-4">
            <div className="relative flex items-center gap-5 text-left">
              <div className="">
                {colorTheme === "light" ? (
                  <motion.img
                    initial={{
                      rotate: 45,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 360,
                      transition,
                    }}
                    whileTap={{
                      scale: 0.9,
                      rotate: 15,
                    }}
                    src={sun}
                    onClick={toggleDarkMode}
                    className="cursor-pointer ml-8 h-6"
                  />
                ) : (
                  <motion.img
                    initial={{
                      scale: 0.6,
                      rotate: 90,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 360,
                      transition,
                    }}
                    whileTap={{
                      scale: 0.9,
                      rotate: 15,
                    }}
                    src={moon}
                    onClick={toggleDarkMode}
                    className="cursor-pointer ml-8 h-6 "
                  />
                )}
              </div>
              <button
                className="text-customblack dark:text-white focus:outline-none flex items-center gap-2"
                onMouseEnter={openMenu2}
                onMouseLeave={closeMenu2}
              >
                <img
                  src={authornav}
                  className="w-7 rounded-full"
                  alt="authornav"
                />
                <span className="flex gap-1 items-center font-normal">
                  Admin{" "}
                  <IoIosArrowDown
                    className={`text-sm text-customtextgrey dark:text-white mt-0.5 ${
                      menuOpen2 ? "transform rotate-180" : ""
                    }`}
                  />{" "}
                </span>
              </button>
              <div
                className={`origin-top-right absolute top-7 right-0 mt-2 w-80 rounded-md shadow-lg ${
                  menuOpen2 ? "block" : "hidden"
                }`}
                onMouseEnter={openMenu2}
                onMouseLeave={closeMenu2}
              >
                <div className="bg-white dark:bg-[#1e2139]  rounded-md shadow-xs">
                  <div className="p-3">
                    <div className="flex items-center p-6 rounded gap-3 bg-customgrey dark:bg-[#141625]">
                      <img
                        src={authornav}
                        className="w-7 rounded-full"
                        alt="authornav"
                      />
                      <Link className="flex flex-col text-customblack dark:text-white">
                        Admin
                        <span className="text-xs text-customtextgrey  dark:text-white">
                          Admin
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-customgrey dark:bg-[#141625] py-3 px-4 flex items-center justify-center gap-2">
                    <BiRightArrowCircle className="text-[#868eae] dark:text-white text-[13px]" />
                    <span onClick={() => navigate('/')} className="text-[#868eae] dark:text-white text-[13px]">
                      Log Out
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

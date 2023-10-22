import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-[#1e2139] duration-300 sm:p-4 p-2 w-full font-jost">
        <div className="mx-auto flex justify-center items-center text-sm">
          <div>
            <p className="text-[#404040] dark:text-white font-medium sm:text-sm text-[12px] text-center">
              Copyright © 2023 GalaxyAxis PRO Connect powered by{" "}
              <NavLink to="/" className="text-btnpurple">
                IT Empire
              </NavLink>
              . Version 1.3.1
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

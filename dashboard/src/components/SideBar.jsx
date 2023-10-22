import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineFileText, AiOutlineUser } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import pro_logo_dark from "../images/pro_logo_dark.png";

const preloadImage = new Image();
preloadImage.src = pro_logo_dark;

const SideBar = () => {
  const Menus = [
    { title: "Dashboard", link: "/dashboard", icon: <MdOutlineDashboard /> },
    {
      title: "Business Registration",
      link: "#",
      icon: <AiOutlineFileText />,
      subMenus: [
        {
          title: "Business Registration",
          src: "/dashboard/business-registration",
          cName: "sub-nav",
        },
        {
          title: "Business Renewal",
          src: "/dashboard/business-renewal",
          cName: "sub-nav",
        },
        {
          title: "Labour Card",
          src: "/dashboard/labour-card",
          cName: "sub-nav",
        },
        {
          title: "Ejari Application",
          src: "/dashboard/ejari-application",
          cName: "sub-nav",
        },
      ],
    },
    {
      title: "Labour Visa",
      link: "#",
      icon: <AiOutlineFileText />,
      subMenus: [
        {
          title: "Offer Letter",
          src: "/dashboard/offer-letter",
          cName: "sub-nav",
        },
        {
          title: "Labour Insurance",
          src: "/dashboard/labour-insurance",
          cName: "sub-nav",
        },
        {
          title: "Labour Fee",
          src: "/dashboard/labour-fee",
          cName: "sub-nav",
        },
        {
          title: "Entry Permit",
          src: "/dashboard/entry-permit",
          cName: "sub-nav",
        },
        {
          title: "Change Status",
          src: "/dashboard/change-status",
          cName: "sub-nav",
        },
        {
          title: "Health Insurance",
          src: "/dashboard/health-insurance",
          cName: "sub-nav",
        },
        {
          title: "Medical Examination Typing",
          src: "/dashboard/medical-examination-typing",
          cName: "sub-nav",
        },
        {
          title: "Emirates ID Typing",
          src: "/dashboard/emirates-id-typing",
          cName: "sub-nav",
        },
        {
          title: "Stamping Visa",
          src: "/dashboard/stamping-visa",
          cName: "sub-nav",
        },
        {
          title: "Final Contract Submission",
          src: "/dashboard/final-contract-submission",
          cName: "sub-nav",
        },
      ],
    },
    {
      title: "Accounts ",
      link: "#",
      icon: <CiMoneyBill />,
      subMenus: [
        {
          title: "Invoice",
          src: "/dashboard/invoice-details",
          cName: "sub-nav",
        },
        {
          title: "Transaction List",
          src: "/dashboard/transaction-list",
          cName: "sub-nav",
        },
        {
          title: "Payments",
          src: "/dashboard/payments",
          cName: "sub-nav",
        },
        {
          title: "Form Fees",
          src: "/dashboard/form-fees",
          cName: "sub-nav",
        },
      ],
    },
    {
      title: "Internal Users",
      link: "#",
      icon: <AiOutlineUser />,
      subMenus: [
        {
          title: "Agents",
          src: "/dashboard/agents",
          cName: "sub-nav",
        },
        {
          title: "Admins",
          src: "/dashboard/admins",
          cName: "sub-nav",
        },
      ],
    },
    {
      title: "External Users",
      link: "#",
      icon: <FiUsers />,
      subMenus: [
        {
          title: "Businesses",
          src: "/dashboard/businesses",
          cName: "sub-nav",
        },
        {
          title: "Persons",
          src: "/dashboard/persons",
          cName: "sub-nav",
        },
      ],
    },
  ];
  const [open, setOpen] = useState(true);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const closeSidebarIfNecessary = () => {
    if (window.innerWidth <= 981) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Listen for window resize events
    window.addEventListener("resize", closeSidebarIfNecessary);

    // Initial check when the component mounts
    closeSidebarIfNecessary();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", closeSidebarIfNecessary);
    };
  }, []);
  const handleSubMenuClick = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  return (
    <>
      <div
        className={`bg-white min-h-full dark:bg-[#1e2139] duration-300  ${
          open ? "w-[280px]" : "w-16"
        } duration-500 text-customblack px-4`}
      >
        <div className="py-3 px-2 flex justify-between items-center relative">
          {open && (
            <img
              src={pro_logo_dark}
              className={`w-24 whitespace-pre ${
                !open ? "opacity-0 translate-x-20 overflow-hidden " : ""
              } duration-500`}
              alt="logo"
            />
          )}
          <HiMenuAlt3
            size={20}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          />
        </div>
        <div className="mt-2 gap-4 group: ">
          <ul className="font-jost font-medium ">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`group relative p-2 py-3 cursor-pointer text-customblack dark:text-white text-sm gap-x-4 hover:text-btnpurple`}
              >
                {Menu.icon ? (
                  <span className="text-lg text-customicongrey dark:text-white hover:text-btnpurple ">
                    {Menu.icon}
                  </span>
                ) : (
                  <MdOutlineDashboard className="icon-large dark:text-white text-customblack" />
                )}
                <NavLink
                  to={Menu.link}
                  activeClassName="text-blue-500"
                  className={`group flex-1 absolute top-[11px] left-10 group whitespace-pre  duration-500 ${
                    !open ? "opacity-0 translate-x-20 overflow-hidden" : ""
                  }`}
                >
                  {Menu.title}
                </NavLink>
                {Menu.subMenus && (
                  <BsChevronDown
                    onClick={() => handleSubMenuClick(index)}
                    className={`${
                      activeMenuIndex === index ? "rotate-180" : ""
                    } group absolute right-2 top-3.5 duration-300 whitespace-pre  ${
                      !open ? "opacity-0 translate-x-20 overflow-hidden" : ""
                    }`}
                  />
                )}
                <NavLink
                  className={`${
                    open ? "hidden" : ""
                  } absolute left-10 top-3 bg-white font-semibold whitespace-pre overflow-hidden text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {Menu.title}
                </NavLink>

                {activeMenuIndex === index && Menu.subMenus && (
                  <div className=" top-full left-0 mt-2">
                    <ul>
                      {Menu.subMenus.map((subMenuItem, idx) => (
                        <li
                          key={idx}
                          className={`px-8 whitespace-pre py-2 cursor-pointer text-sm text-customblack dark:text-white hover:text-btnpurple ${
                            !open
                              ? "opacity-0 translate-x-20 overflow-hidden hidden"
                              : ""
                          }`}
                        >
                          <Link to={subMenuItem.src}>{subMenuItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;

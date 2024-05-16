import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`fixed bg-slate-50  border-1 border-b border-slate-200 w-full z-20 top-0 start-0 transition-all duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            EstateEase
          </span>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-black">
            .
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <a
              href="/property"
              className="block py-2 px-3 font-semibold text-black rounded md:bg-transparent  md:hover:text-gray-300"
              aria-current="page"
            >
              Properties
            </a>
          </li>
          <li>
            <a
              href="/addproperty"
              className="block py-2 px-3 font-semibold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 "
            >
              New Property
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            className="h-8 mr-3 sm:h-10"
            alt="Logo"
          />
          <span className="text-xl font-semibold whitespace-nowrap dark:text-white">
            Navbar
          </span>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8">
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

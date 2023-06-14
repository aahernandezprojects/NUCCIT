import React from "react";
import Logo from "../Assets/logo2.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="flex justify-between h-screen lg:h-[40vh] w-full bg-base-200 px-10 py-10">
      <div className="flex w-full h-fit gap-3 lg:gap-10">
        <div className="flex gap-2 flex-col w-1/2 lg:w-fit h-full">
          <img src={Logo} className="w-1/3 lg:w-7" alt="Logo" />
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            News + Updates
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Research
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            About
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Support Media Lab
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Graduate Program
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            People
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Events
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Dataset
          </a>
        </div>
        <div className="flex gap-2 flex-col w-1/2 lg:w-fit h-full">
          <a className="text-sm font-semibold text-gray-400" href="/">
            More ways to Explore
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Videos
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Publications
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Job Opportunities
          </a>
          <a
            className="text-sm font-light hover:text-blue-700 transition-colors duration-500"
            href="/"
          >
            Contact
          </a>
        </div>
      </div>
      <div>
        <div className="flex mt-3 lg:mt-10 gap-3">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
        <h3 className="font-light text-sm pr-5">
          National University College of Computing and Information Technology
        </h3>
      </div>
    </div>
  );
}

export default Footer;

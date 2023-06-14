import React from "react";
import Logo from "../Assets/logo1.png";
import LogoMobile from "../Assets/logo2.png";
import { Outlet } from "react-router-dom";
function Navigation() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
          <div className="w-full navbar bg-white bg-opacity-50 px-5 lg:px-14 sticky top-0">
            <div className="flex-1 px-2 mx-2">
              <img src={Logo} alt="Logo" className="hidden lg:block w-64" />
              <img
                src={LogoMobile}
                alt="Logo for Mobile"
                className="visible lg:hidden mt-2 w-12"
              />
            </div>
            <div className="flex-none lg:flex gap-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 hidden lg:flex"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 hidden lg:flex"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-7 h-7 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="flex flex-col gap-3 w-full lg:w-1/2 bg-base-100 h-fit px-8 lg:px-20 pb-36">
          <div className="w-full navbar pt-10 z-30">
            <div className="flex-1 px-2 mx-2"></div>
            <div className="flex-none flex gap-5 lg:gap-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <h1 className="text-5xl text-gray-400 font-bold cursor-pointer hover:text-blue-600 transition-colors mt-28">
            News + Updates
          </h1>
          <h1 className="text-5xl text-gray-400 font-bold cursor-pointer hover:text-blue-600 transition-colors ">
            Research
          </h1>
          <h3 className="text-lg text-amber-400 font-bold">
            Affective Computing
          </h3>
          <div className="flex flex-col gap-3 pl-10">
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Overview
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Applicant Information
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Publication List Pre 2020
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Publications
            </h3>
            <h3 className="text-lg text-amber-400 font-bold">People</h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Projects
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Press
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Events
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Updates
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Archived Projects
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Tools
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Data
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Videos
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              FAQ
            </h3>
            <h3 className="text-lg text-gray-400 font-semibold cursor-pointer hover:text-black transition-colors">
              Policy
            </h3>
          </div>
          <h1 className="text-5xl text-gray-400 font-bold cursor-pointer hover:text-blue-600 transition-colors mt-14">
            About
          </h1>
          <h1 className="text-5xl text-gray-400 font-bold cursor-pointer hover:text-blue-600 transition-colors ">
            Graduate Program
          </h1>
          <h1 className="text-5xl text-gray-400 font-bold cursor-pointer hover:text-blue-600 transition-colors ">
            Events
          </h1>
          <h1 className="text-5xl text-gray-400 font-bold cursor-pointer hover:text-blue-600 transition-colors ">
            Videos
          </h1>
          <h1 className="text-5xl text-gray-400 font-bold cursor-pointer hover:text-blue-600 transition-colors ">
            Member Portal
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

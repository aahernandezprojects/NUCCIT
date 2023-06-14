import React from "react";
import Banner from "./Assets/banner-nu.jpg";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="min-h-screen w-full">
      <div
        className="h-[75vh] w-full flex justify-center items-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {
          <h1 className="text-white lg:text-6xl px-10 text-3xl lg:px-72 font-bold text-center">
            Advancing human well-being by developing new ways to communicate,
            understand, and respond to emotion
          </h1>
        }
      </div>
      <div className="flex w-full h-fit">
        {/* Start of right div hidden */}
        <div className=" gap-4 -mt-36 w-1/4 bg-white border-slate-200 border hidden lg:flex lg:flex-col py-28 pl-24 pr-24">
          <h3 className="font-bold">{"< Research"}</h3>
          <div className="divider mt-16" />
          <h3 className="font-bold text-gray-400 mt-16">In this Group:</h3>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            Overview
          </a>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            Publications List Pre 2020
          </a>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            Publications
          </a>
          <h3 className="font-bold text-amber-400">People</h3>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            Projects
          </a>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            Events
          </a>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            Updates
          </a>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            Data
          </a>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            FAQ
          </a>
          <a
            className="font-bold hover:text-blue-700 transition-colors"
            href="/"
          >
            Policy
          </a>
          <div className="divider mt-8" />
          <h5 className="font-bold text-gray-400 text-sm">Group Contact:</h5>
          <h5 className="font-light text-gray-400 text-sm flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </span>
            admin@national-u.edu.ph
          </h5>
        </div>
        {/* Start of Cards (1st Column) */}
        {
          <div className="flex flex-col h-fit w-full lg:w-3/4">
            <div className="flex flex-col lg:flex-row w-full">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex flex-col lg:flex-row w-full">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex flex-col lg:flex-row w-full">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        }
      </div>
      <div className="flex flex-col w-full h-fit">
        <div className="flex flex-col lg:flex-row w-full">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="h-fit w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;

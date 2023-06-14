import React from "react";
import Banner from "./Assets/banner-nu.jpg";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Emeliza from "./Assets/emeliza.png";
import Gizelle from "./Assets/gizelle.png";
import Ja from "./Assets/ja.png";
import Jen from "./Assets/jen.png";
import Jessica from "./Assets/jessica.jpg";
import Joseph from "./Assets/joseph.png";
import Mideth from "./Assets/mideth.png";
import Mon from "./Assets/mon.png";
import Myron from "./Assets/myron.png";
import Alex from "./Assets/alex.png";
import Alexa from "./Assets/alexa.png";
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
          <h1 className="text-white lg:text-5xl px-5 text-2xl lg:px-72 font-bold text-center">
            <span className="text-amber-400 text-3xl lg:text-6xl">
              Empowering Grassroots Voices:
            </span>{<br/>}
            Bridging the Gap between People and Decision Makers through
            eParticipation and NLP Analysis.
          </h1>
        }
      </div>
      {/* Adding Menubar collapsible */}
      <div
        tabIndex={0}
        className="collapse collapse-plus border rounded-none h-fit border-base-300 bg-base-200 visible lg:hidden"
      >
        <div className="w-full flex justify-between py-6">
          <div className="flex justify-center items-center font-semibold text-base text-amber-500 w-1/2 h-full">
            People
          </div>
          <div className="collapse-title text-blue-600 font-semibold text-base w-1/2">
            More
          </div>
        </div>

        <div className="flex flex-col gap-3 collapse-content w-full px-16">
          <a href="/" className="font-semibold">
            Overview
          </a>
          <a href="/" className="font-semibold">
            Publication list Pre 2020
          </a>
          <a href="/" className="font-semibold">
            Publication
          </a>
          <a href="/" className="font-semibold text-amber-500">
            People
          </a>
          <a href="/" className="font-semibold">
            Projects
          </a>
          <a href="/" className="font-semibold">
            Press
          </a>
          <a href="/" className="font-semibold">
            Events
          </a>
          <a href="/" className="font-semibold">
            Updates
          </a>
          <a href="/" className="font-semibold">
            Archived Projects
          </a>
          <a href="/" className="font-semibold">
            Tools
          </a>
          <a href="/" className="font-semibold">
            Dataset
          </a>
        </div>
      </div>
      <div className="flex w-full h-fit">
        {/* Start of right div hidden */}
        <div className=" gap-4 -mt-36 w-1/4 bg-base-100 border-slate-200 border hidden lg:flex lg:flex-col py-28 pl-24 pr-24">
          <h3 className="font-bold">{"< Research"}</h3>
          <div className="divider mt-16" />
          <h3 className="font-bold text-gray-400">In this Group:</h3>
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
              <Card
                fullName={"Dr. Mideth B. Abisado"}
                positionName={"Team Leader"}
                photoURL={Mideth}
              />
              <Card
                fullName={"Dr. Alexander A. Hernandez"}
                positionName={"University Researcher 1"}
                photoURL={Alex}
              />
              <Card
                fullName={"Ramon Rodriguez"}
                positionName={"University Researcher 1"}
                photoURL={Mon}
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full">
              <Card
                fullName={"Joseph Imperial"}
                positionName={"University Researcher 1"}
                photoURL={Joseph}
              />
              <Card
                fullName={"Emiliza Yabut"}
                positionName={"University Researcher 1"}
                photoURL={Emeliza}
              />
              <Card
                fullName={"Alexa Ray Fernando"}
                positionName={"University Researcher 1"}
                photoURL={Alexa}
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full">
              <Card
                fullName={"Jenelyn Salimbagat"}
                positionName={"University Researcher 1"}
                photoURL={Jen}
              />
              <Card
                fullName={"Jay Rhald Padilla"}
                positionName={"University Researcher 2"}
                photoURL={Ja}
              />
              <Card
                fullName={"Myron Darrel Montefalcon"}
                positionName={"University Researcher 2"}
                photoURL={Myron}
              />
            </div>
          </div>
        }
      </div>
      <div className="flex flex-col w-full h-fit">
        <div className="flex flex-col lg:flex-row w-full">
          <Card
            fullName={"Gizelle Ponce"}
            positionName={"University Researcher 2"}
            photoURL={Gizelle}
          />
          <Card
            fullName={"Jessica Marie Manalo"}
            positionName={"Project Assistant IV"}
            photoURL={Jessica}
          />
         {/*  <Card
            fullName={""}
            positionName={""}
            photoURL={""}
          />
           <Card
            fullName={""}
            positionName={""}
            photoURL={""}
          /> */}
        </div>
        {/* <div className="flex flex-col lg:flex-row w-full">
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
      </div>
      <div className="h-fit w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;

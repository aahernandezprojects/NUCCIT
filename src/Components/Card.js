import React from "react";

function Card() {
  return (
    <div className="w-full h-96 border border-slate-100 cursor cursor-pointer group">
      <div className="w-full h-1/2 flex justify-end">
        <div className="w-1/2 h-full bg-gray-500 flex flex-col justify-end">
          <div className="w-full h-1 bg-blue-500 hidden group-hover:block duration-100"></div>
        </div>
      </div>
      <h1 className="font-semibold px-10 text-2xl mt-10 group-hover:text-blue-700 duration-500 transition-colors">
        FirstName M. LastName
      </h1>
      <h1 className="px-10 text-xl font-light text-gray-400 group-hover:text-blue-500">Position in the company</h1>
    </div>
  );
}

export default Card;

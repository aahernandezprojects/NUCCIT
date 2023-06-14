import React from "react";

function Card({fullName,positionName,photoURL}) {
  return (
    <div className="lg:w-full w-96 h-96 border border-base-200 cursor cursor-pointer group">
      <div className="w-full h-1/2 flex justify-end">
        <div className="w-1/2 h-full  flex flex-col justify-end">
            <img src={photoURL} alt={`Photo for ${fullName}`} className="w-full h-full object-cover"/>
          <div className="w-full h-1 bg-blue-500 hidden group-hover:block duration-100"/>
        </div>
      </div>
      <h1 className="font-semibold px-10 text-2xl mt-10 group-hover:text-blue-700 duration-500 transition-colors">
        {fullName}
      </h1>
      <h1 className="px-10 text-xl font-light text-gray-400 group-hover:text-blue-500">{positionName}</h1>
    </div>
  );
}

export default Card;

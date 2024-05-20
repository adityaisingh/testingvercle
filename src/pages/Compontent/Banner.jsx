import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-500 h-60   ">
      <div className="flex justify-center font-bold py-10 text-3xl text-white text-bold">
        <h1>Over 174,000+ hotels and homes across 35+ countries</h1>
      </div>
      <div className="flex justify-center  my-2 mx-10  ">
        <input
          type="text"
          placeholder="Search by city...."
          className=" outline-none px-3 text-2xl border-r-2 border-gray-300  "
        />
        <Link href={"/hotels"}>
          <button
            type="submit "
            className=" h-16 w-40 px-2 py-3 text-bold text-3xl bg-green-400  hover:cursor-pointer  ">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

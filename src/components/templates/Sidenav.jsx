import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div
      className="w-[20%] bg-black h-full border-r-2
   border-sinc-200 p-10"
    >
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill"></i>
        <span className="text-2xl m-2">SCSDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-500 gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-star-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-film-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-user-fill"></i> People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-500">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-information-fill"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;

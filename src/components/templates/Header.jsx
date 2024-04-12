import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ data }) => {
  // console.log("DATA", random);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%), url("https://image.tmdb.org/t/p/original${
          data?.backdrop_path || data?.poster_path
        }")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%] ali"
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "30%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
        }}
      ></div>
      <h1 className="w-[70%] text-4xl font-bold mb-3 font-mono">
        {data?.title ||
          data?.name ||
          data?.original_name ||
          data?.original_title}
      </h1>
      <p className="w-[70%]">{data.overview.slice(0, 200)}</p>
      <p className="text-white mt-3">
        <i className="text-yellow-500 ri-vidicon-fill"></i>{" "}
        {data?.release_date || "No Information"}
      </p>
      <Link
        to={`/${data.media_type}/${data.id}/trailer`}
        className="bg-[#6556CD] p-3 rounded-md mt-5 text-white font-semibold"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;

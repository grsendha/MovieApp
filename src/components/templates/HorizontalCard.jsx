import React from "react";
import Dropdown from "./Dropdown";

const HorizontalCard = ({ data }) => {
  return (
    // <div className="w-full h-[40vh] p-5 ">
    <div className=" flex overflow-x-auto ">
      {data.map((item, index) => (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          key={item.id}
          className="min-w-[20vh] h-[29vh] bg-red-100 mr-5 mb-1 rounded-lg shadow-lg flex justify-center items-end p-5 relative"
        ></div>
      ))}
    </div>
    // </div>
  );
};

export default HorizontalCard;

import React from "react";

const HorizontalCard = ({ data }) => {
  return (
    <div className="w-full h-[40vh] p-5 ">
      <div className="mb-2">
        <h1 className=" text-3xl font-bold text-zinc-400">Trending</h1>
      </div>
      <div className="w-full flex overflow-x-auto">
        {data.map((item, index) => (
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={item.id}
            className="min-w-[15%] h-[29vh] bg-red-100 mr-5"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;

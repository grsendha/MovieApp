import React from "react";
import { Link } from "react-router-dom";
import Progress from "./Progress";

const Normalcard = ({ data, title }) => {
  return (
    <div className="w-[100%] flex flex-wrap justify-center items-center gap-8">
      {data.map((item, index) => (
        <Link
          to={`/${item.media_type || title}/${item.id}`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.poster_path})`,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.4)", // Modified box shadow with white color
          }}
          key={item.id}
          className="min-w-[25vh] h-[39vh] bg-red-100 mr-5 mb-1 rounded-lg shadow-lg flex justify-center items-end p-5 relative"
        >
          <Progress />
        </Link>
      ))}
    </div>
  );
};

export default Normalcard;

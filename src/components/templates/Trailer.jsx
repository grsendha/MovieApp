import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Notfound from "./Notfound";

const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("tv") ? "tv" : "movie";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute z-[100] top-[0] left-[0] w-screen h-screen flex items-center justify-center bg-black bg-opacity-90">
      {ytvideo && ytvideo.key ? (
        <ReactPlayer
          playing={true}
          controls={true}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export default Trailer;

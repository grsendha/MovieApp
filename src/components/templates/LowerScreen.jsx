import React, { useEffect } from "react";
import Header from "./Header";
import HorizontalCard from "./HorizontalCard";
import Dropdown from "./Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { asyncWallpaper } from "../../store/actions/movieActions";

const LowerScreen = ({ category, setCategory, wallpaper, trending }) => {
  // const dispatch = useDispatch();
  // const { info } = useSelector((state) => state.movie);
  // useEffect(() => {
  //   dispatch(asyncWallpaper());
  // }, []);
  // console.log("INFO IN LOWERSCREEN", info);
  return (
    <>
      <Header data={wallpaper} />
      <div className=" flex justify-between mx-4 my-4  ">
        <h1 className=" text-3xl font-bold text-zinc-400 ">
          Trending -{" "}
          {category === "all"
            ? "All"
            : category === "tv"
            ? "TV Shows"
            : "Movies"}
        </h1>
        <Dropdown func={setCategory} />
      </div>
      <HorizontalCard data={trending} />
    </>
  );
};

export default LowerScreen;

import React, { useEffect } from "react";
import Header from "./Header";
import HorizontalCard from "./HorizontalCard";
import Dropdown from "./Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { asyncWallpaper } from "../../store/actions/movieActions";
import { useState } from "react";

const LowerScreen = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("all");
  // const { mainPageInfo } = useSelector((state) => state.movie);
  // console.log("INFO IN LOWERSCREEN", mainPageInfo);
  const data1 = useSelector((state) => state.movie.mainPageInfo);
  console.log("DATA1", data1);
  // let random = data1.wallpaper;
  let data =
    data1.wallpaper &&
    data1.wallpaper[(Math.random() * data1.wallpaper.length).toFixed(0)];
  console.log("DATA", data);
  console.log("CATEGORY1", category);
  console.log("TRENDING", data1);

  let trendingData = data1.trending;

  useEffect(() => {
    dispatch(asyncWallpaper(category));
  }, [category]);
  return (
    data && (
      <>
        <Header data={data} />
        <div className=" flex justify-between mx-4 my-4  ">
          <h1 className=" text-3xl font-bold text-zinc-400 ">
            Trending -{" "}
            {category === "all"
              ? "All"
              : category === "tv"
              ? "TV Shows"
              : "Movies"}
          </h1>
          <Dropdown dropData={["all", "tv", "movie"]} func={setCategory} />
        </div>
        <div className="mx-4">
          <HorizontalCard data={trendingData} />
        </div>
      </>
    )
  );
};

export default LowerScreen;

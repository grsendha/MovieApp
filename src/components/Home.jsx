import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import Spinner from "./Spinner";
import HorizontalCard from "./templates/HorizontalCard";
import Dropdown from "./templates/Dropdown";
import MainScreen from "./templates/MainScreen";
import { Outlet } from "react-router-dom";
const Home = () => {
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      let random =
        data.results[(Math.random() * data.results.length).toFixed(0)];
      setwallpaper(random);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("TRENDING", trending);
  console.log("WALLPAPER", wallpaper);

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrending();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      {/* <Outlet /> */}
      <MainScreen
        wallpaper={wallpaper}
        trending={trending}
        category={category}
        setCategory={setCategory}
      />
    </>
  ) : (
    <Spinner />
  );
};

export default Home;

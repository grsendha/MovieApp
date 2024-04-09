import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import Spinner from "./Spinner";
import HorizontalCard from "./templates/HorizontalCard";
const Home = () => {
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);

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
      const { data } = await axios.get(`/trending/all/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("TRENDING", trending);
  console.log("WALLPAPER", wallpaper);

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    !trending && getTrending();
  }, []);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full bg-black overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCard data={trending} />
      </div>
    </>
  ) : (
    <Spinner />
  );
};

export default Home;

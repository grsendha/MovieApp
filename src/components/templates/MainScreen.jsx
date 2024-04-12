import React from "react";
import Topnav from "./Topnav";
import LowerScreen from "./LowerScreen";
import { Outlet } from "react-router-dom";

const MainScreen = ({ category, setCategory, wallpaper, trending }) => {
  return (
    <div className="w-[80%] h-full bg-black overflow-auto overflow-x-hidden">
      <Topnav />
      <Outlet />
      <LowerScreen
        category={category}
        setCategory={setCategory}
        wallpaper={wallpaper}
        trending={trending}
      />
    </div>
  );
};

export default MainScreen;

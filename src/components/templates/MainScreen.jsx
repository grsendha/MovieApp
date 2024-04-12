import React from "react";
import Topnav from "./Topnav";
import LowerScreen from "./LowerScreen";
import { Outlet } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className="w-[80%] h-full bg-black overflow-auto overflow-y-hidden">
      <Topnav />
      <Outlet />
      {/* <LowerScreen /> */}
    </div>
  );
};

export default MainScreen;

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
import { useSelector } from "react-redux";
const Home = () => {
  const retrivedData = useSelector((state) => state.movie.mainPageInfo);

  return retrivedData ? (
    <>
      <Sidenav />
      {/* <Outlet /> */}
      <MainScreen />
    </>
  ) : (
    <Spinner />
  );
};

export default Home;

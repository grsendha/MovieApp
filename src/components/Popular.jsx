import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Normalcard from "./templates/Normalcard";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");

  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const refreshHandler = async () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      console.log("POPULAR", data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="p-[3%] w-screen h-screen  overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="text-white ri-arrow-left-line"
          ></i>{" "}
          Popular
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown />
        </div>
      </div>
      <InfiniteScroll
        next={getPopular}
        dataLength={popular.length}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Normalcard data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Spinner />
  );
};

export default Popular;

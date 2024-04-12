import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "../../utils/axios";
import Normalcard from "./Normalcard";
import Spinner from "../Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const refreshHandler = async () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      // setTrending(data.results);
      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      console.log("TRENDING PAGE", data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="p-[3%] w-full h-full  overflow-y-auto">
      <div className="text-white flex justify-between items-center mx-[8%] my-4">
        <h1 className="text text-4xl font-semibold">Trending</h1>
        <div className=" ">
          <Dropdown
            dropData={["all", "movie", "tv"]}
            func={setCategory}
            title="Category"
          />

          <Dropdown
            dropData={["day", "week"]}
            func={setDuration}
            title="Duration"
          />
        </div>
      </div>
      <InfiniteScroll
        next={getTrending}
        dataLength={trending.length}
        hasMore={hasMore}
        loader={<h1>Loader</h1>}
      >
        <Normalcard data={trending} />
      </InfiniteScroll>
    </div>
  ) : (
    <Spinner />
  );
};

export default Trending;

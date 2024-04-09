import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noImage from "/noImage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data.results);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[20%]">
      <i className="text-3xl text-zinc-200 ri-search-2-line mr-4"></i>
      <input
        type="text"
        className="w-[50%] h-[50%] bg-zinc-200 rounded-lg p-5 pl-10 mx-5"
        placeholder="Search for movies, tv shows, people..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-200 ri-close-line"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] overflow-auto rounded-lg">
        {searches.map((data, index) => {
          return (
            <div className="flex justify-start items-center  ">
              <img
                src={
                  data.backdrop_path || data.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        data.backdrop_path || data.profile_path
                      }`
                    : noImage
                }
                className="w-[10vh] h-[10vh] object-cover rounded-3xl  mx-5 shadow-lg "
              />
              <Link
                key={data.id}
                className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-800  w-[100%] p-8 flex justify-start items-center border-b-2 border-zinc-100"
              >
                <h2>
                  {data.name ||
                    data.title ||
                    data.original_name ||
                    data.original_title}
                </h2>
              </Link>
            </div>
          );
        })}
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-800  w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="movie" />
          <span>Hello Everyone</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;

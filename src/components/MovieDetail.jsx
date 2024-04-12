import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../store/actions/movieActions";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import HorizontalCard from "./templates/HorizontalCard";
import { Outlet } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);
  console.log("INFO", info);
  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%), url("https://image.tmdb.org/t/p/original${info.detail?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
      className=" relative w-screen h-screen px-[10%] dark:bg-black"
    >
      <nav className=" h-[10vh] w-full text-white flex items-center p-4 gap-7 text-xl">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] text-white ri-arrow-left-line cursor-pointer"
        ></i>

        <a
          target="_blank"
          href={info.detail.homepage}
          className="hover:text-[#6556CD] text-white"
        >
          <i className="ri-link"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalIds.wikidata_id}`}
          className="hover:text-[#6556CD] text-white"
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalIds.imdb_id}`}
          className="hover:text-[#6556CD] text-white"
        >
          Imdb
        </a>
      </nav>

      <div className="w-full flex ">
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${info.detail.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-w-[25vh] h-[35vh] bg-red-100 mr-5 mb-1  shadow-lg flex justify-center items-end p-5 relative"
        ></div>

        <div className="content ml-[2%] ">
          <h1 className=" font-black text-3xl">
            {info.detail.title}
            <small className="">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <h2 className="text-xl font-semibold italic">
            {info.detail.tagline}
          </h2>

          <h1 className="text-2xl mt-5">Overview</h1>
          <div className="w-[90%]">
            <p className="mt-3">{info.detail.overview}</p>
          </div>

          <div className=" mt-9 text-white font-semibold">
            <Link
              to={`/movie/${id}/trailer`}
              className="bg-[#6556CD] p-3 rounded-md "
            >
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>

      <div className=" mt-8 flex-col ]">
        <h1 className="text-3xl text-white  mb-5 font-black">
          Recommendations
        </h1>
        <HorizontalCard
          data={info.recommendations ? info.recommendations : info.similar}
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Spinner />
  );
};

export default MovieDetail;

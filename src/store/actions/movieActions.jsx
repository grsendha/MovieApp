export { removeMovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import { loadMainPage, loadMovie } from "../reducers/movieSlice";

export const asyncWallpaper = (category) => async (dispatch, getState) => {
  try {
    const wallpaper = await axios.get(`/trending/all/day`);
    const trending = await axios.get(`/trending/${category}/day`);
    dispatch(
      loadMainPage({
        wallpaper: wallpaper.data.results,
        trending: trending.data.results,
      })
    );
  } catch (error) {
    console.error(error);
  }
};

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalIds = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
    const wallpaper = await axios.get(`/trending/all/day`);

    let allDetails = {
      wallpaper: wallpaper.data.results,
      detail: detail.data,
      externalIds: externalIds.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((video) => video.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };
    dispatch(loadMovie(allDetails));
    console.log("ALL DETAILS", allDetails);
  } catch (error) {
    console.error(error);
  }
};

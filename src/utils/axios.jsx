import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzlhN2Q3NjQ2ZjA1ZDcwZjYwNzA0MDgwYWY5ZTE4ZCIsInN1YiI6IjY2MTUxMmMzMDQ4NjM4MDE3YzFjMjJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oYnRwtulabbKXqbyLZEblV6aWmrc2VFoh4vMKKQseQ0",
  },
});

export default instance;

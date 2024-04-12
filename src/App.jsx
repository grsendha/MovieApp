import Home from "./components/Home";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Trending from "./components/templates/Trending";
import LowerScreen from "./components/templates/LowerScreen";
import Popular from "./components/Popular";
import TvDetail from "./components/TvDetail";
import MovieDetail from "./components/MovieDetail";
import Trailer from "./components/templates/Trailer";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <Routes>
        {/* <Route path="/trending" element={<Trending />} /> */}
        <Route path="/" element={<Home />}>
          <Route path="/" element={<LowerScreen />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
        </Route>
        {/* <Route path="/popular" element={<Popular />} /> */}
        <Route path="/tv/:id" element={<TvDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />}>
          <Route path="/movie/:id/trailer" element={<Trailer />} />
        </Route>
      </Routes>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/trending",
    element: <Trending />,
  },
]);

export default App;

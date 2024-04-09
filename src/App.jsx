import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

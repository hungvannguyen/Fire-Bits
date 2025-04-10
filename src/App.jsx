import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews.jsx";

function App() {
  return (
    <div className="">
      <div className="background">
        <div className="overlay"></div>
        <div className="bg-pattern"></div>
      </div>
      <div className="main">
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

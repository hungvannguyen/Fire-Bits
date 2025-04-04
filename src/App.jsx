import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <div className="background">
        <div className="overlay"></div>
        <div className="bg-pattern"></div>
      </div>
      <div className="main">
        <div className="my_container mt-[82px]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

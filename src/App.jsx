import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Outsourcing from "./pages/Outsourcing.jsx";
import Sass from "./pages/Sass.jsx";
import Ecommerce from "./pages/Ecommerce.jsx";
import AiAgency from "./pages/AiAgency.jsx";
import Seo from "./pages/Seo.jsx";

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
            <Route path="/outsourcing" element={<Outsourcing />} />
            <Route path="/sass" element={<Sass />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/ai-agency" element={<AiAgency />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

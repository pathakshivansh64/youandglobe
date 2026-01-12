import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/ServicePage";
import Jobs from "./pages/JobPage";
import Blog from "./pages/BlogPage";
import Contact from "./pages/Contact";
import About from "./pages/AboutPage";
import Footer from "./pages/Footer";
import ServicePage from "./pages/ServicePage";
import JobPage from "./pages/JobPage";
import Termsandconditions from "./pages/TermandConditions"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/jobs/*" element={<Jobs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:service" element={<ServicePage />} />
          <Route path="/jobs/:job" element={<JobPage />} />
          <Route path="/termsandconditions" element={<Termsandconditions/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from "react";
import Preloader from "https://github.com/thongstylish/portfolio/src/components/Pre";
import Navbar from "https://github.com/thongstylish/portfolio/components/Navbar";
import Home from "https://github.com/thongstylish/portfolio/components/Home/Home";
import About from "https://github.com/thongstylish/portfolio/components/About/About";
import Experience from "https://github.com/thongstylish/portfolio/components/Experience/Experience";
import Resume from "https://github.com/thongstylish/portfolio/components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "https://github.com/thongstylish/portfolio/src/style.css";
import "https://github.com/thongstylish/portfolio/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Featured from "./pages/Featured";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import './css/style.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoCook from "./InfoCook";
import InfoFit from "./InfoFit";
import Qualifications from "./Qualifications";
import InfoManga from "./InfoManga";
import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/lets-cook-app" element={<InfoCook />} />
            <Route path="/project/fit-app" element={<InfoFit />} />
            <Route path="/project/manga-bibl" element={<InfoManga />} />
            <Route path="/qualifications" element={<Qualifications />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;

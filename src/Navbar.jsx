import React, { useState } from "react";
import TrueFocus from "./components/TrueFocus";
import "./components/TrueFocus.css";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleMobileNavClick = (sectionId) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  const handleMobileRouteClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="navbar col-12 col-md-12 col-lg-12">
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <TrueFocus
          sentence="Caarlos Dev"
          manualMode={false}
          blurAmount={5}
          borderColor="#44bcad"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-links">
        <button
          onClick={() => scrollToSection("projects")}
          className="nav-btn"
        >
          Projects
        </button>
        <button
          onClick={() => navigate("/qualifications")}
          className="nav-btn"
        >
          Qualifications
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="nav-btn"
        >
          Contact
        </button>
      </div>

      {/* Hamburger Toggle Menu Button for Mobile */}
      <button 
        className={`nav-toggle ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Collapsible Dropdown for Mobile Devices */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-dropdown"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <button
              onClick={() => handleMobileNavClick("projects")}
              className="nav-dropdown-item"
            >
              Projects
            </button>
            <button
              onClick={() => handleMobileRouteClick("/qualifications")}
              className="nav-dropdown-item"
            >
              Qualifications
            </button>
            <button
              onClick={() => handleMobileNavClick("contact")}
              className="nav-dropdown-item"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import React from "react";
import TrueFocus from "./components/TrueFocus";
import "./components/TrueFocus.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

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
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={() => scrollToSection("projects")}
          style={{
            borderRadius: "20px",
            background: "none",
            color: "white",
            borderColor: "#44bcad",
            boxShadow: "4px 3px 0 0",
          }}
        >
          Projects
        </button>
        <button
          onClick={() => navigate("/qualifications")}
          style={{
            borderRadius: "20px",
            background: "none",
            color: "white",
            borderColor: "#44bcad",
            boxShadow: "4px 3px 0 0",
          }}
        >
          Qualifications
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          style={{
            borderRadius: "20px",
            background: "none",
            color: "white",
            borderColor: "#44bcad",
            boxShadow: "4px 3px 0 0",
          }}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

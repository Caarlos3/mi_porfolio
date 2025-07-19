import React from "react";
import TrueFocus from "./components/TrueFocus";
import "./components/TrueFocus.css";

export default function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar col-12 col-md-12 col-lg-12">
      <div>
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
          onClick={() => scrollToSection("about-me")}
          style={{
            borderRadius: "20px",
            background: "none",
            color: "white",
            borderColor: "#44bcad",
            boxShadow: "4px 3px 0 0",
            fontFamily: "Impact",
          }}
        >
          About
        </button>
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              borderRadius: "20px",
              background: "none",
              color: "white",
              borderColor: "#44bcad",
              boxShadow: "4px 3px 0 0",
              fontFamily: "Impact",
            }}
          >
            Projects
          </button>
        <button
          onClick={() => scrollToSection("contact")}
          style={{
            borderRadius: "20px",
            background: "none",
            color: "white",
            borderColor: "#44bcad",
            boxShadow: "4px 3px 0 0",
            fontFamily: "Impact",
          }}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

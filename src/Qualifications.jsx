import React from "react";
import Silk from "./components/Silk";
import { div } from "framer-motion/client";

export default function Qualifications() {
  return (
    <div>
      <Silk />
      <div id="qualifications" style={{ padding: "5rem", color: "white"}}>
        
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <img style={{width:"600px", margin: "50px",maxWidth: "100%"}} src="/4geeks.png" alt="full" />
            
            <img style={{width:"600px", margin: "50px",maxWidth:"100%"}} src="/Java-Titulo.png" alt="Java" />
        </div>
      </div>
    </div>
  );
}

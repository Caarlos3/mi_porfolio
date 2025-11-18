import React from "react";
import Silk from "./components/Silk";
import { div } from "framer-motion/client";

export default function Qualifications() {
  return (
    <div>
      <Silk />
      <div id="qualifications" style={{ padding: "2rem", color: "white"}}>
        <h2 style={{padding:"50px", fontFamily: "impact"}}>Títulos Académicos</h2>
        <div>
            <img style={{width:"600px", margin: "50px",maxWidth: "100%"}} src="/4geeks.png" alt="full" />
            
            <img style={{width:"600px", margin: "50px",maxWidth:"100%"}} src="/Java-Titulo.png" alt="Java" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Silk from "./components/Silk";
import { motion } from "framer-motion";

export default function Qualifications() {

  const variantLeft = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const variantRight = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />
      <div id="qualifications" className="home-container" style={{ paddingBottom: '100px' }}>

        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "60px", alignItems: "center", width: "100%" }}>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px" }}
          >
            <img style={{ width: "100%", borderRadius: "20px" }} src="/4geeks.png" alt="full" />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px" }}
          >
            <img style={{ width: "100%", borderRadius: "20px" }} src="/ML1.png" alt="Python" />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px" }}
          >
            <img style={{ width: "100%", borderRadius: "20px" }} src="/Web-Scraping.png" alt="Python" />
          </motion.div>
          
          <motion.div
            className="ag-section-card"
            variants={variantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px" }}
          >
            <img style={{ width: "100%", borderRadius: "20px" }} src="/Java-Titulo.png" alt="Java" />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px" }}
          >
            <img style={{ width: "100%", borderRadius: "20px" }} src="/Python-Titulo.png" alt="Python" />
          </motion.div>



        </div>
      </div>
    </>
  );
}

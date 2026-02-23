import React from "react";
import "./index.css";
import Silk from "./components/Silk";
import { motion } from "framer-motion";

function InfoCook() {
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
      <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />

      <div className="home-container ag-font" style={{ paddingBottom: "100px" }}>
        <motion.div
          className="ag-section-card"
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <h1 className="ag-heading">Let's Cook App</h1>
          <button
            className="link-button"
            style={{ marginBottom: "30px" }}
            onClick={() =>
              window.open("https://github.com/Caarlos3/LET-S-COOK-APP", "_blank")
            }
          >
            <i className="fa-brands fa-github"></i> GitHub
          </button>
          <p className="ag-subheading" style={{ maxWidth: "800px", textAlign: "left", marginBottom: "0" }}>
            Let's Cook es una aplicación innovadora diseñada para ayudar a los
            usuarios a descubrir nuevas recetas basadas en los ingredientes que ya
            tienen en casa. La idea principal detrás de la aplicación es reducir
            el desperdicio de alimentos y facilitar la planificación de comidas al
            proporcionar sugerencias de recetas personalizadas. Para la el
            desarrollo de esta aplicación hemos hecho uso de React para el
            frontend, Node.js y Python para el backend, y una base de datos SQL
            para almacenar la información de los usuarios y sus recetas. Además,
            hemos integrado la API de OpenAI para proporcionar recomendaciones
            personalizadas de recetas basadas en los ingredientes que los usuarios
            introducen.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "60px", alignItems: "center", width: "100%", marginTop: "20px" }}>

          <motion.div
            className="ag-section-card"
            variants={variantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/letscook-1.png" alt="Let's Cook 1" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/letscook-2.png" alt="Let's Cook 2" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/letscook-3.png" alt="Let's Cook 3" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default InfoCook;

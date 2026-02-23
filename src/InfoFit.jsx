import React from "react";
import "./index.css";
import Silk from "./components/Silk";
import { motion } from "framer-motion";

function InfoFit() {
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
          <h1 className="ag-heading">Let's Fit App</h1>
          <button
            className="link-button"
            style={{ marginBottom: "30px" }}
            onClick={() =>
              window.open("https://github.com/Caarlos3/LET-S_FIT_APP", "_blank")
            }
          >
            <i className="fa-brands fa-github"></i> GitHub
          </button>
          <p className="ag-subheading" style={{ maxWidth: "800px", textAlign: "left", marginBottom: "0" }}>
            Let's Fit App es una aplicación dedicada a realizar el seguimiento y
            guardar el progreso de la rutina de ejercicio físico. Permite al
            usuario registrar sus entrenamientos, sugerir ejercicos a traves de IA
            y monitorear su evolución a lo largo del tiempo. La aplicación ofrece
            una interfaz intuitiva para ingresar datos de ejercicios, visualizar
            estadísticas y mantener la motivación en el camino hacia un estilo de
            vida más saludable. Para el desarrollo del frontend se utilizó React,
            aprovechando su capacidad para crear interfaces de usuario dinámicas y
            responsivas. El backend con Python y Flask además se incluye la
            integración de la API de OpenAI para generar sugerencias de ejercicios
            personalizadas.
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
            <img src="/fit-1.png" alt="Fit App 1" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/fit-2.png" alt="Fit App 2" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/fit-3.png" alt="Fit App 3" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/fit-4.png" alt="Fit App 4" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default InfoFit;

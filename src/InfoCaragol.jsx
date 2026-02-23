import React from "react";
import "./index.css";
import Silk from "./components/Silk";
import { motion } from "framer-motion";

function InfoCaragol() {
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
          <h1 className="ag-heading">Can Caragol</h1>
          <button
            className="link-button"
            style={{ marginBottom: "30px" }}
            onClick={() =>
              window.open(
                "https://github.com/Juandomz91/Can-cargol/tree/Reservas",
                "_blank"
              )
            }
          >
            <i className="fa-brands fa-github"></i> GitHub
          </button>
          <p className="ag-subheading" style={{ maxWidth: "800px", textAlign: "left", marginBottom: "0" }}>
            Can Caragol es un web para reservas de un B&B situado en Girona,
            España. El sitio web permite a los usuarios explorar las habitaciones
            disponibles, ver fotos, leer descripciones y realizar reservas en
            línea de manera fácil y conveniente. Además, el sitio web está
            diseñado para ser atractivo y fácil de navegar, brindando una
            experiencia agradable a los visitantes. Para el desarrollo de este
            proyecto, se utilizaron tecnologías como React para la interfaz de
            usuario, Node.js y Python para el backend, y una base de datos SQL
            para gestionar las reservas y la información de los usuarios. Ademas
            se ha integrado Stripe para el procesamiento de pagos en línea.
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
            <img src="/cancaragol1.png" alt="Can Caragol 1" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/cancaragol2.png" alt="Can Caragol 2" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/cancaragol3.png" alt="Can Caragol 3" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "flex", justifyContent: "center", maxWidth: "800px", padding: "20px" }}
          >
            <img src="/cancaragol4.png" alt="Can Caragol 4" style={{ width: "100%", borderRadius: "20px" }} />
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default InfoCaragol;

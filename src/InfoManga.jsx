import React from "react";
import "./index.css";
import Silk from "./components/Silk";
import { motion } from "framer-motion";

function InfoManga() {
  const variantLeft = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
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

      <div
        className="home-container ag-font"
        style={{ paddingBottom: "100px" }}
      >
        <motion.div
          className="ag-section-card"
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="ag-heading">Manga-bibl</h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              className="link-button"
              onClick={() =>
                window.open(
                  "https://github.com/Caarlos3/MANGA.BIBL-FULLSTACK",
                  "_blank"
                )
              }
            >
              <i className="fa-brands fa-github"></i> GitHub
            </button>
            <button
              className="link-button"
              onClick={() =>
                window.open(
                  "https://manga-bibl-fullstack.vercel.app/",
                  "_blank"
                )
              }
            >
              <i className="fa-solid fa-globe"></i> WEB
            </button>
          </div>

          <p
            className="ag-subheading"
            style={{ maxWidth: "800px", textAlign: "left", marginBottom: "0" }}
          >
            Manga-bibl es una web para poder llevar un registro de tu colección
            de manga. Permite a los usuarios crear una cuenta, agregar mangas a
            su biblioteca personal y marcarlos como leídos. El sitio web ofrece
            una interfaz intuitiva y atractiva, facilitando la navegación y la
            gestión de la colección de manga. Para el desarrollo de este
            proyecto, se utilizaron tecnologías como React para la interfaz de
            usuario, Java junto a Spring Boot para el backend.
          </p>
        </motion.div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            alignItems: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <motion.div
            className="ag-section-card"
            variants={variantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "800px",
              padding: "20px",
              marginTop: "40px",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <source src="/videos/mangabibl.mp4" type="video/mp4" />
              Tu navegador no soporta vídeos.
            </video>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default InfoManga;

import React from "react";
import "./index.css";
import Silk from "./components/Silk";


function InfoCaragol() {
  return (
    <div>
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
        />,
      <div style={{ padding: "20px", color: "white", textAlign: "center", fontFamily: "Impact" }}>
      <h1>Can Caragol</h1>
      <p style={{ fontFamily: "Arial", maxWidth: "800px", margin: "0 auto", marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
        Can Caragol es un web para reservas de un B&B situado en Girona, España.
        El sitio web permite a los usuarios explorar las habitaciones disponibles,
        ver fotos, leer descripciones y realizar reservas en línea de manera fácil
        y conveniente. Además, el sitio web está diseñado para ser atractivo y
        fácil de navegar, brindando una experiencia agradable a los visitantes.
        Para el desarrollo de este proyecto, se utilizaron tecnologías como React para
        la interfaz de usuario, Node.js y Python para el backend, y una base de datos
        SQL para gestionar las reservas y la información de los usuarios.
        Ademas se ha integrado Stripe para el procesamiento de pagos en línea.
      </p>
      <imagenes style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "20px" }}>
        <img src="/cancaragol1.png" alt="Can Caragol" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
        <img src="/cancaragol2.png" alt="Can Caragol" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
        <img src="/cancaragol3.png" alt="Can Caragol" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
        <img src="/cancaragol4.png" alt="Can Caragol" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
      </imagenes>

      
      
    </div>
    </div>
  );
}
export default InfoCaragol;
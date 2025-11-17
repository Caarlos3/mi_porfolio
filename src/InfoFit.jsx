import React from "react";
import "./index.css";
import Silk from "./components/Silk";


function InfoFit() {
  return (
    <div>
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
        />,
      <div style={{ padding: "20px", color: "white", textAlign: "center", fontFamily: "Impact" }}>
      <h1>Let's Fit App</h1>
      <p style={{ fontFamily: "Arial", maxWidth: "800px", margin: "0 auto", marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
       Let's Fit App es una aplicación dedicada a realizar el seguimiento y guardar el progreso de la rutina de ejercicio físico. Permite al usuario registrar sus entrenamientos, sugerir ejercicos a traves de IA y monitorear su evolución a lo largo del tiempo. La aplicación ofrece una interfaz intuitiva para ingresar datos de ejercicios, visualizar estadísticas y mantener la motivación en el camino hacia un estilo de vida más saludable.
       Para el desarrollo del frontend se utilizó React, aprovechando su capacidad para crear interfaces de usuario dinámicas y responsivas. El backend con Python y Flask además se incluye la integración de la API de OpenAI para generar sugerencias de ejercicios personalizadas.
      </p>
      <imagenes style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "20px" }}>
        <img src="/fit-1.png" alt="Fit App" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
        <img src="/fit-2.png" alt="Fit App" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
        <img src="/fit-3.png" alt="Fit App" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
        <img src="/fit-4.png" alt="Fit App" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
      </imagenes>

      
      
    </div>
    </div>
  );
}
export default InfoFit;
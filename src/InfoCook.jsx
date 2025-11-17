import React from "react";
import "./index.css";
import Silk from "./components/Silk";


function InfoCook() {
  return (
    <div>
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
        />,
      <div style={{ padding: "20px", color: "white", textAlign: "center", fontFamily: "Impact" }}>
      <h1>Let's Cook App</h1>
      <p style={{ fontFamily: "Arial", maxWidth: "800px", margin: "0 auto", marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
        Let's Cook es una aplicación innovadora diseñada para ayudar a los usuarios a descubrir nuevas recetas basadas en los ingredientes que ya tienen en casa. La idea principal detrás de la aplicación es reducir el desperdicio de alimentos y facilitar la planificación de comidas al proporcionar sugerencias de recetas personalizadas.
        Para la el desarrollo de esta aplicación hemos hecho uso de React para el frontend, Node.js y Python para el backend, y una base de datos SQL para almacenar la información de los usuarios y sus recetas. Además, hemos integrado la API de OpenAI para proporcionar recomendaciones personalizadas de recetas basadas en los ingredientes que los usuarios introducen.
      </p>
      <imagenes style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "20px" }}>
        <img src="/letscook-1.png" alt="Let's Cook 1" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
        <img src="/letscook-2.png" alt="Let's Cook 2" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
        <img src="/letscook-3.png" alt="Let's Cook 3" style={{ maxWidth: "80%", marginBottom: "20px", borderRadius: "20px" }} />
      </imagenes>
      
      
    </div>
    </div>
  );
}
export default InfoCook;
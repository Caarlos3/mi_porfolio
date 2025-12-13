import React from "react";
import "./index.css";
import Silk from "./components/Silk";

function InfoManga() {
  return (
    <div>
      <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} />,
      <div
        style={{
          padding: "20px",
          color: "white",
          textAlign: "center",
          fontFamily: "Impact",
        }}
      >
        <h1>Manga-bibl</h1>
        <button
          className="link-button"
          style={{ marginRight: "15px" }}
          onClick={() =>
            window.open(
              "https://github.com/Caarlos3/Mangapp",
              "_blank"
            )
          }
        >
          <i class="fa-brands fa-github"></i> GitHub Back
        </button>
        <button
          className="link-button"
          onClick={() =>
            window.open(
              "https://github.com/Caarlos3/Mangaapp-front",
              "_blank"
            )
          }
        >
          <i class="fa-brands fa-github"></i> GitHub Front
        </button>

        <p
          style={{
            fontFamily: "Arial",
            maxWidth: "800px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Manga-bibl es una wev para poder llevan un registro de tu coleccion
          de manga. Permite a los usuarios crear una cuenta, agregar mangas a su
          biblioteca personal y marcarlos como lídos. El sitio web ofrece una
          interfaz intuitiva y atractiva, facilitando la navegación y la gestión
          de la colección de manga. Para el desarrollo de este proyecto, se
          utilizaron tecnologías como React para la interfaz de usuario, Java junto a Spring Boot para el backend y MySQL como base de datos.
        </p>
        <imagenes
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >

          <img
            src="/manga.png"
            alt="manga"
            style={{
              maxWidth: "80%",
              marginBottom: "20px",
              borderRadius: "20px",
            }}
          />
          <img
            src="/manga1.png"
            alt="manga"
            style={{
              maxWidth: "80%",
              marginBottom: "20px",
              borderRadius: "20px",
            }}
          />
          <img
            src="/manga2.png"
            alt="manga"
            style={{
              maxWidth: "80%",
              marginBottom: "20px",
              borderRadius: "20px",
            }}
          />
        </imagenes>
      </div>
    </div>
  );
}
export default InfoManga;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Silk from "./components/Silk";
import "./index.css";
import ProfileCard from "./components/ProfileCard";
import Carousel from "./components/Carousel";
import { useNavigate } from "react-router-dom";

const cookAppItems = [
  { id: 1, src: "/home-app-cook.png", alt: "Home App Cook" },
  { id: 2, src: "/user-view-cook.png", alt: "User view App Cook" },
  { id: 3, src: "/recipe-view.png", alt: "Recipe view App Cook" },
];

const canCargolItems = [
  { id: 1, src: "/Can-Caragol1.png", alt: "Can Cargol 1" },
  { id: 2, src: "/Can-caragol2.png", alt: "Can Cargol 2" },
  { id: 3, src: "/Can-caragol3.png", alt: "Can Cargol 3" },
  { id: 4, src: "/Can-caragol4.png", alt: "Can Cargol 4" },
  { id: 5, src: "/Can-caragol5.png", alt: "Can Cargol 5" },
];

const fitItems = [
  { id: 1, src: "/fit1.png", alt: "Fit App 1" },
  { id: 2, src: "/fit2.png", alt: "Fit App 2" },
  { id: 3, src: "/fit3.png", alt: "Fit App 3" },
  { id: 4, src: "/fit4.png", alt: "Fit App 4" },
]

const mangaBiblItems = [
  { id: 1, src: "/fotomanga.png", alt: "Manga Bibl 1" },
  { id: 2, src: "/fotomanga1.png", alt: "Manga Bibl 2" },
]
export default function Home() {
  const navigate = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_av64q4u";
    const templateID = "template_5pm5ewq";
    const publicKey = "rghEZSHN8MObZqIZd";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again later.");
      }
    );
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

      <div className="home-container section" id="about-me">
        <div className="home-content">
          <div className="about-me">
            <h1 style={{ fontFamily: "Impact" }}>About me</h1>
            <p
              style={{
                fontSize: "20px",
                fontFamily: "monospace",
                width: "100%",
              }}
            >
              Mi nombre es Carlos Ramírez Torres, Full Stack Developer.
              <br />
              Me apasiona crear aplicaciones web para la resolución de problemas
              y mejora de la vida diaria. Mi experiencia se centra en el
              desarrollo de aplicaciones utilizando tecnologías como React,
              Javascript, Java, Node.js, Python, Flask, OpenAI API y SQL.
            </p>

            <div className="card-urls">
              <ul>
                <li className="iso-pro">
                  <span></span>
                  <span></span>
                  <span></span>
                  <a href="https://github.com/Caarlos3">
                    <i className="fa-brands fa-github svg" aria-label="GitHub"></i>
                  </a>
                </li>
                <li className="iso-pro">
                  <span></span>
                  <span></span>
                  <span></span>
                  <a href="https://www.linkedin.com/in/carlos-ram%C3%ADrez-torres-4391a226b/">
                    <i
                      className="fa-brands fa-linkedin-in svg"
                      aria-label="LinkedIn"
                    ></i>
                  </a>
                </li>
                <li className="iso-pro">
                  <span></span>
                  <span></span>
                  <span></span>
                  <a href="/CarlosRamirezCV2025.pdf" download>
                    <i
                      className="fa-solid fa-file-arrow-down svg"
                      aria-label="Descargar CV"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: "60px" }}>
            <ProfileCard
              
              name="Carlos Ramírez Torres"
              title="Full Stack Developer"
              handle="CaarlosDev"
              status="Online"
              avatarUrl="/mi-foto.png"
              showUserInfo={false}
              enableTilt={true}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
        <div className="home-tools" style={{ fontFamily: "Impact" }} id="tools">
          <h1>Tools</h1>
          <div className="tools-icons">
            <div className="tools-icons-container">
              <img src="/icons8-css-48.png" alt="" />
              <img src="/icons8-flask-50.png" alt="" />
              <img src="/icons8-javascript-48.png" alt="" />
              <img src="/icons8-nodo-js-48.png" alt="" />
              <img src="/icons8-python-48.png" alt="" />
              <img src="/icons8-java-48.png" alt="" />
              <img src="/icons8-rápidamente-48.png" alt="" />
              <img src="/icons8-html-5-48.png" alt="" />
              <img src="/icons8-reaccionar-nativo-48.png" alt="" />
              <img src="/icons8-sql-48.png" alt="" />
              <img src="/icons8-git-48.png" alt="" />
              <img src="/icons8-css-48.png" alt="" />
              <img src="/icons8-flask-50.png" alt="" />
              <img src="/icons8-javascript-48.png" alt="" />
              <img src="/icons8-nodo-js-48.png" alt="" />
              <img src="/icons8-python-48.png" alt="" />
              <img src="/icons8-java-48.png" alt="" />
              <img src="/icons8-rápidamente-48.png" alt="" />
              <img src="/icons8-html-5-48.png" alt="" />
              <img src="/icons8-reaccionar-nativo-48.png" alt="" />
              <img src="/icons8-sql-48.png" alt="" />
              <img src="/icons8-git-48.png" alt="" />
            </div>
          </div>
        </div>

        <div className="section" id="projects">
          <h1 style={{ fontFamily: "Impact" }}>Projects</h1>
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
            <div style={{ position: "relative" }}>
             <a
                onClick={() => navigate("/project/lets-cook-app")}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  cursor: "pointer"
                }}
              />
              <Carousel
                items={cookAppItems}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={2000}
                pauseOnHover={true}
                loop={true}
                round={false}
                title="LET'S COOK APP"
                tags={["Python", "React", "OpenAI API"]}
              />
            </div>
            <div style={{ position: "relative" }}>
              <a
                onClick={() => navigate("/project/can-cargol")}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  cursor: "pointer"
                }}
              />
              <Carousel
                items={canCargolItems}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={2000}
                pauseOnHover={true}
                loop={true}
                round={false}
                title="CAN CARGOL"
                tags={["React", "Node.js", "SQL", "Python"]}
              />
            </div>
            <div style={{ position: "relative" }}>
             <a
                onClick={() => navigate("/project/fit-app")}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  cursor: "pointer"
                }}
              />
              <Carousel
                items={fitItems}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={2000}
                pauseOnHover={true}
                loop={true}
                round={false}
                title="LET'S FIT APP"
                tags={["Python", "React", "OpenAI API","Flask"]}
              />
            </div>
            <div style={{ position: "relative" }}>
             <a
                onClick={() => navigate("/project/manga-bibl")}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  cursor: "pointer"
                }}
              />
              <Carousel
                items={mangaBiblItems}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={2000}
                pauseOnHover={true}
                loop={true}
                round={false}
                title="MANGA-BIBL"
                tags={["Java", "React", "JWT", "API REST"]}
              />
            </div>
          </div>
        </div>

        <div className="section" id="contact">
          <h1 style={{ fontFamily: "Impact" }}>Contact</h1>
        </div>
        <div className="contact-container">
          <div>
            <form
              style={{ fontFamily: "Impact" }}
              ref={form}
              onSubmit={sendEmail}
            >
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="name"
                placeholder="Name"
                required
              />
              <label htmlFor="user_email">Email</label>
              <input
                type="text"
                id="user_email"
                name="email"
                placeholder="Email"
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="4"
                placeholder="Write a comment"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <footer>
          <p style={{ fontFamily: "Impact", fontSize: "18px" }}>
            © 2025 Carlos Ramírez Torres. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

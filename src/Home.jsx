import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Silk from "./components/Silk";
import "./index.css";
import ProfileCard from "./components/ProfileCard";
import Carousel from "./components/Carousel";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  const variantLeft = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const variantRight = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

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

      <div className="home-container section ag-font" id="about-me">
        <motion.div
          className="ag-section-card"
          variants={variantLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="home-content">
            <div className="about-me">
              <h1 className="ag-heading">About me</h1>
              <p className="ag-subheading" style={{ width: "100%" }}>
                Hi, my name is Carlos Ramírez Torres, Full Stack Developer & Aspiring Ai Developer.
                <br /><br />
                I am passionate about building functional, scalable, and well-structured web applications that solve problems and enhance daily life. With a strong technical foundation in React, JavaScript, Java, Node.js, Python, FastAPI, Flask, and SQL. I ensure code reliability through unit testing with Jest and Pytest. My expertise has evolved beyond traditional CRUD applications; I am currently deep-diving into AI Orchestration and Agentic Workflows, leveraging the OpenAI API to build intelligent, autonomous systems.
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
            <div style={{ flexShrink: 0, width: "100%", maxWidth: "360px", display: "flex", justifyContent: "center" }}>
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
        </motion.div>

        <motion.div
          className="ag-section-card section" id="tools"
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="home-tools" style={{ alignItems: 'flex-start' }}>
            <h1 className="ag-heading" style={{ fontSize: '2rem' }}>Skills & Tools</h1>
            <div className="ag-tools-grid">
              <div className="ag-tool-chip"><img src="/icons8-javascript-48.png" alt="JavaScript" /> JavaScript</div>
              <div className="ag-tool-chip"><img src="/icons8-python-48.png" alt="Python" /> Python</div>
              <div className="ag-tool-chip"><img src="/icons8-java-48.png" alt="Java" /> Java</div>
              <div className="ag-tool-chip"><img src="/icons8-reaccionar-nativo-48.png" alt="React" /> React</div>
              <div className="ag-tool-chip"><img src="/icons8-nodo-js-48.png" alt="Node.js" /> Node.js</div>
              <div className="ag-tool-chip"><img src="/icons8-flask-50.png" alt="Flask" /> Flask</div>
              <div className="ag-tool-chip"><img src="/icons8-sql-48.png" alt="SQL" /> SQL</div>
              <div className="ag-tool-chip"><img src="/icons8-css-48.png" alt="CSS" /> CSS3</div>
              <div className="ag-tool-chip"><img src="/icons8-html-5-48.png" alt="HTML" /> HTML5</div>
              <div className="ag-tool-chip"><img src="/icons8-git-48.png" alt="Git" /> Git</div>
              <div className="ag-tool-chip"><img src="/icons8-rápidamente-48.png" alt="FastAPI" /> FastAPI</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="ag-section-card section" id="projects"
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <h1 className="ag-heading">Projects</h1>
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <a
                href="/project/lets-cook-app"
                aria-label="View Let's Cook App project details"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/project/lets-cook-app");
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  cursor: "pointer"
                }}
              >
                <span style={{ display: "none" }}>Let's Cook App</span>
              </a>
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
                href="/project/can-cargol"
                aria-label="View Can Cargol project details"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/project/can-cargol");
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  cursor: "pointer"
                }}
              >
                <span style={{ display: "none" }}>Can Cargol</span>
              </a>
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
                href="/project/fit-app"
                aria-label="View Let's Fit App project details"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/project/fit-app");
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  cursor: "pointer"
                }}
              >
                <span style={{ display: "none" }}>Let's Fit App</span>
              </a>
              <Carousel
                items={fitItems}
                baseWidth={300}
                autoplay={true}
                autoplayDelay={2000}
                pauseOnHover={true}
                loop={true}
                round={false}
                title="LET'S FIT APP"
                tags={["Python", "React", "OpenAI API", "Flask"]}
              />
            </div>
            <div style={{ position: "relative" }}>
              <a
                href="/project/manga-bibl"
                aria-label="View Manga Bibl project details"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/project/manga-bibl");
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  cursor: "pointer"
                }}
              >
                <span style={{ display: "none" }}>Manga Bibl</span>
              </a>
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
        </motion.div>

        <motion.div
          className="ag-section-card section" id="contact"
          variants={variantRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="ag-heading" style={{ textAlign: "center" }}>Let's Connect</h1>
          <p className="ag-subheading" style={{ textAlign: "center", marginBottom: "40px" }}>Send me an email and I will get back to you as soon as possible.</p>
          <div className="contact-container" style={{ margin: "0 auto" }}>
            <div style={{ width: "100%" }}>
              <form
                className="ag-font"
                ref={form}
                onSubmit={sendEmail}
                style={{ alignItems: "stretch", width: "100%", maxWidth: "600px" }}
              >
                <label htmlFor="user_name" style={{ fontFamily: "Inter", fontWeight: "600", fontSize: "1rem", textAlign: "left", marginBottom: "8px" }}>Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={{ textAlign: "left", padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}
                />
                <label htmlFor="user_email" style={{ fontFamily: "Inter", fontWeight: "600", fontSize: "1rem", textAlign: "left", marginBottom: "8px" }}>Email</label>
                <input
                  type="text"
                  id="user_email"
                  name="email"
                  placeholder="Your Email"
                  required
                  style={{ textAlign: "left", padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}
                />
                <label htmlFor="message" style={{ fontFamily: "Inter", fontWeight: "600", fontSize: "1rem", textAlign: "left", marginBottom: "8px" }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="4"
                  placeholder="Drop a note here..."
                  required
                  style={{ textAlign: "left", padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "30px" }}
                ></textarea>
                <button type="submit" className="link-button" style={{ alignSelf: "flex-start" }}>Send Message</button>
              </form>
            </div>
          </div>
        </motion.div>

        <footer style={{ marginTop: '20px', marginBottom: '40px', width: "100%", textAlign: "center" }}>
          <p className="ag-font" style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>
            © 2025 Carlos Ramírez Torres. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

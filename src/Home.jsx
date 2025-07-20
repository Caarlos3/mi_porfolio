import React , { useRef } from "react";
import emailjs from '@emailjs/browser'; 
import Silk from "./components/Silk";
import "./index.css";
import ProfileCard from "./components/ProfileCard";
import Carousel from "./components/Carousel";
import Navbar from "./Navbar";

export default function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_av64q4u';
    const templateID = 'template_5pm5ewq';
    const publicKey = 'rghEZSHN8MObZqIZd';
 

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
      <Navbar />
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />

      <div className="home-container" id="about-me">
        <div className="home-content">
          <div className="about-me">
            <h1 style={{ fontFamily: "Impact" }}>About me</h1>
            <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
              Mi nombre es Carlos Ramírez Torres, Full Stack Developer.
              <br />
              Me apasiona crear aplicaciones web para la resolución de problemas
              y mejora de la vida diaria. Mi experiencia se centra en el
              desarrollo de aplicaciones utilizando tecnologías como React,
              Javascript, Node.js, Python, Flask, OpenAI API y SQL.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="https://www.linkedin.com/in/carlos-ram%C3%ADrez-torres-4391a226b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa-brands fa-linkedin"
                  style={{ color: "#63E6BE" }}
                ></i>
              </a>
              <a
                href="https://github.com/Caarlos3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github" style={{ color: "#63E6BE" }}></i>
              </a>
              <a href="/Carlos-Ramírez-CV.pdf"
                download={"Carlos-Ramírez-CV.pdf"}
                onClick={() => console.log("CV downloaded")}
                style={{ color: "#63E6BE", cursor: "pointer" }}>
              <i class="fa-regular fa-file"></i>
          
              </a>
            </div>
          </div>
          <div>
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
              <img src="/icons8-rápidamente-48.png" alt="" />
              <img src="/icons8-html-5-48.png" alt="" />
              <img src="/icons8-reaccionar-nativo-48.png" alt="" />
              <img src="/icons8-sql-48.png" alt="" />
              <img src="/icons8-git-48.png" alt="" />
            </div>
          </div>
        </div>

        <div id="projects">
          <h1 style={{ fontFamily: "Impact" }}>Projects</h1>
          <div>
            <div style={{ position: "relative" }}>
              <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={2000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>

        <div id="contact">
          <h1 style={{ fontFamily: "Impact" }}>Contact</h1>
        </div>
        <div className="contact-container">
          <div className="contact-info" style={{ fontFamily: "Impact"}}>
            
            <p>Carlos Ramírez Torres</p>
            <p>+34 639 026 788</p>
            <p>crt.981995@gmail.com</p>
          </div>
          <div>
            <form style={{ fontFamily: "Impact" }} ref={form} onSubmit={sendEmail}>
              <label htmlFor="user_name">Name</label>
              <input type="text" id="user_name" name="name" placeholder="Name" required />
              <label htmlFor="user_email">Email</label>
              <input type="text" id="user_email" name="email" placeholder="Email" required/>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" cols="30" rows="4" placeholder="Write a comment" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <footer>
          <p style={{ fontFamily: "Impact" }}>
            © 2025 Carlos Ramírez Torres. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

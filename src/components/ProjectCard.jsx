import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import "./ProjectCard.css";

export default function ProjectCard({
  title,
  tags = [],
  carouselItems = [],
  baseWidth = 308,
  autoplay = true,
  autoplayDelay = 2000,
  onNavigate,
}) {
  const cardRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(baseWidth);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width > 0) {
          setCarouselWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [baseWidth]);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Media / Carousel Section */}
      <div className="project-card-media">
        <Carousel
          items={carouselItems}
          baseWidth={carouselWidth}
          autoplay={autoplay}
          autoplayDelay={autoplayDelay}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>

      {/* Info Section */}
      <div className="project-card-body">
        {/* Tech tags */}
        {tags.length > 0 && (
          <div className="project-card-tags">
            {tags.map((tag) => (
              <span key={tag} className="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 
          className="project-card-title" 
          onClick={onNavigate}
          style={{ cursor: "pointer" }}
        >
          {title}
        </h3>

        {/* Call to action */}
        <div className="project-card-action" onClick={onNavigate}>
          <span>Ver detalles</span>
          <i className="fa-solid fa-arrow-right arrow-icon"></i>
        </div>
      </div>
    </motion.div>
  );
}

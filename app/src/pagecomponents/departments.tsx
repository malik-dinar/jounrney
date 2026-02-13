"use client";
import React, { useState, useEffect } from "react";
import "../styles/department.css";

const slides = [
  {
    title: "Our Departments",
    points: [
      "Community Access",
      "Group Living",
      "Supported Living",
      "Supported Independent Living",
    ],
    bg: "/assets/departments.avif",
  },
  {
    title: "Community Access",
    description: [
      "Support with daily activities at home, work, and in the community.",
      "We promote independence and community participation through engaging activities such as swimming, outings, sensory programs, library visits, sports, games, and creative arts.",
      "Our goal is to help individuals live enriched and fulfilling lives.",
    ],
    bg: "/assets/community.jpg",
  },
  {
    title: "Group Living",
    description: [
      "We provide a safe, structured, and supportive shared living environment designed to promote independence and well-being.",
      "Our services include assistance with meal preparation, medical appointments, medication administration, shopping, housekeeping, and overall home maintenance.",
    ],
    bg: "/assets/groupliving.webp",
  },
  {
    title: "Supported Living",
    description: [
      "Supportive households provide a safe, inclusive, and structured home environment for individuals.",
      "Qualified caregivers deliver personalized support tailored to each individual’s needs, while encouraging independence and meaningful community participation.",
    ],
    bg: "/assets/community.jpg",
  },
  {
    title: "Supported Independent Living",
    description: [
      "Personalized coaching to build independence and life skills.",
      "Home-based support with access to meaningful community opportunities.",
    ],
    bg: "/assets/supported-independent-living.jpg",
  },
];

export default function Departments() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider" id="departments">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img
            src={slide.bg}
            alt={slide.title}
            className="slide-image"
          />

          <div className="overlay">
            <h1 className="main-title">{slide.title}</h1>

            <ul className="points">
              {(slide.points || slide.description).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

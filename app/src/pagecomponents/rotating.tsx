"use client";

import React, { useEffect, useState } from "react";
import "../../src/styles/rotating_grid.css";

const RotatingGrid: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setRotation(window.scrollY * 0.1);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const videos = [
    { src: "code.mp4", className: "large" },
    { src: "robot.mp4", className: "tall" },
    { src: "vr.mp4", className: "medium" },
    { src: "keyboard.mp4", className: "small" },
    { src: "robot2.mp4", className: "medium" },
    { src: "beard.mp4", className: "large" },
    { src: "boyvr.mp4", className: "small" },
    { src: "search.mp4", className: "medium" },
  ];

  return (
    <div className="container">
      <div
        className="rotating-grid-container"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className={`grid-element ${video.className}`}
          >
            <video autoPlay loop muted playsInline className="video-bg">
              <source src={`/videos/${video.src}`} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingGrid;

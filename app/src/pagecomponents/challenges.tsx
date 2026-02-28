"use client";
import "../styles/challenges.css";

export const ChallengesSection = () => {
  const challenges = [
    "Addictions & Challenging Behavior",
    "Developmental Disabilities",
    "Mental Health Challenges",
    "Fetal Alcohol Spectrum Disorder",
    "Physical Disability",
    "Brain Injury, Genetics & Chromosomal Conditions",
  ];

  return (
    <section className="challenges-wrapper">
      <h1 className="challenges-title">Challenges Addressed</h1>

      <div className="challenges-grid">
        {challenges.map((title, index) => (
          <div key={index} className="challenges-card">
            <span className="card-dot" />
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};
"use client";
import "../styles/challenges.css";

export const ChallengesSection = () => {
  const challenges = [
    { title: "Addictions & Challenging Behavior", },
    { title: "Developmental Disabilities", },
    { title: "Mental Health Challenges",},
    { title: "Fetal Alcohol Spectrum Disorder", },
    { title: "Physical Disability", },
    { title: "Brain Injury, Genetics & Chromosomal Conditions", },
  ];


  return (
    <section className="challenges-wrapper">
      <div className="challenges-container">
        <h1 className="challenges-title">Challenges Addressed</h1>
        {challenges.map((item, index) => (
          <div key={index} className={`challenges-card card-${index}`}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

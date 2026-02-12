
import "../styles/journeyofhope.css";

export const JourneyOfHope = () => {
  const data = [
    {
      text: "We are a purpose-driven, people-centered organization dedicated to supporting adults with cognitive challenges."
    },
    {
      text: "Our mission is to empower individuals to live meaningful, fulfilling, and valued lives within their communities through compassionate, person-centered care available 24/7."
    },
    {
      text: "Our team consists of highly experienced healthcare professionals with backgrounds in Social Service Work (SSW), Disability Studies, Health Care Aide (HCA), Registered Nursing (RN & LPN), Physiotherapy, and Speech Therapy."
    }
  ];

  return (
    <div className="journeyofhope-wrapper">
      <div className="journeyofhope-container">

        {/* HEADING */}
        <div className="journeyofhope-heading">
          <h1>Journey Of Hope(JOH)</h1>
        </div>

        {/* CARDS */}
        <div className="journeyofhope-cards">
          {data.map((item, index) => (
            <div key={index} className="journeyofhope-card">
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>


  );
};

import "../styles/journeyofhopecore.css";
import Honor from "../assets/Honor.png";
import Openness from "../assets/Handshake.png";
import Person from "../assets/Person.png"
import disability from "../assets/disability.avif"


export const JourneyOfHopeCore= () => {
  return (
        <section className="hope-wrapper">
      <div className="hope-container">

        {/* LEFT SIDE */}
        <div className="hope-left">

          <div className="hope-row">
            <span className="hope-letter">H</span>
            <div className="hope-text">
              <h3>Honor</h3>
              <p>Dignity of each person is fully respected.</p>
            </div>
          </div>

          <div className="hope-row">
            <span className="hope-letter">O</span>
            <div className="hope-text">
              <h3>Openness</h3>
              <p>We are transparent about what we do and how we do things.</p>
            </div>
          </div>

          <div className="hope-row">
            <span className="hope-letter">P</span>
            <div className="hope-text">
              <h3>Person centered planning</h3>
              <p>All our actions are centered around the individual.</p>
            </div>
          </div>

          <div className="hope-row">
            <span className="hope-letter">E</span>
            <div className="hope-text">
              <h3>Empowering</h3>
              <p>Support individuals to make informed decisions about their life.</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hope-right">
          <img src={disability.src} alt="Hope Illustration" />
        </div>

      </div>
    </section>
  );
};

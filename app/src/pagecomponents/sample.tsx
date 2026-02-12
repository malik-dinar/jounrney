import "../styles/sample.css";
import Honor from "../assets/Honor.png";
import Openness from "../assets/Handshake.png";
import Person from "../assets/Person.png"
import empowerment from "../assets/Mental_level.png"


export const Sample = () => {
  return (
    <div className="col-12 journeyofhope-main">
      <div className="app-container">
        <section className="journey-core">
          <div className="journey-left">
            <h1 style={{fontSize:"60px"}}>
              Journey of Hope – <br />
              <span>Core Values</span>
            </h1>
          </div>

          <div className="journey-right">
            <div className="core-item">
              <img
                src={Honor.src}
                alt="Honor"
                style={{ width: "80px", height: "auto" }}
              />
              <h2>Honor</h2>
            </div>
            <div className="core-item">
              <img
                src={Openness.src}
                alt="Openness"
                style={{ width: "80px", height: "auto" }}
              />
              <h2>Openness</h2>
              </div>
            <div className="core-item">
              <img
                src={Person.src}
                alt="Person"
                style={{ width: "80px", height: "auto" }}
              />
              <h2>Person-Centered Planning</h2>
            </div>
            <div className="core-item">
            <img
                src={empowerment.src}
                alt="empowerment"
                style={{ width: "80px", height: "auto" }}
              />
              <h2>Empowering</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

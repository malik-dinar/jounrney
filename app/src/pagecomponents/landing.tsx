import "../styles/landing.css";
export const Landing = () => {
  return (
    <div className="landing-main col-12">
      <div className="app-container">
 <div className="landing-main">
      
      <div className="overlay-content">
        <h1>
          LIFE IS <br />
          A JOURNEY <br />
          WITH LOTS OF <br />
          <span className="highlight">HOPES FOR</span> <br />
          <span className="highlight">THE BEST</span>
        </h1>
      </div>

      <svg viewBox="0 0 1440 200" className="curve">
        <path
          fill="#ffffff"
          d="M0,160 C480,260 960,60 1440,140 L1440,320 L0,320 Z"
        />
      </svg>
      <div className="logo-section">
        <img src="/logo.png" alt="Logo" />
        <h2>JOURNEY OF HOPE INC.</h2>
        <p>www.journey-hope.ca</p>
      </div>

    </div>      </div>
    </div>
  );
};

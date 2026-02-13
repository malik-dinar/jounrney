
import "../styles/whyChooseUs.css";

export const WhyChoose = () => {
  const data = [
    {
      text: "Personalized Support"
    },
    {
      text: "Experienced Caring Staff"
    },
    {
      text: "Focus On Skill Development & Personal Goals."
    }
  ];

  return (
    // <div className="whychoose-wrapper">
    //   <div className="whychoose-container">

    //     {/* HEADING */}
    //     <div className="whychoose-heading">
    //       <h1>Why Choose Us</h1>
    //     </div>

    //     {/* CARDS */}
    //     <div className="whychoose-cards">
    //       {data.map((item, index) => (
    //         <div key={index} className="whychoose-card">
    //           <p>{item.text}</p>
    //         </div>
    //       ))}
    //     </div>

    //   </div>
    // </div>
<section className="why-section"  id="services">

      <div className="overlay-box">
        <h2>Why Choose Us</h2>

        <ul>
          <li>
            Our team focuses on supporting you in developing the skills and
            achieving the outcomes you want in life.
          </li>

          <li>
            At the heart of our work is a deep commitment to nurturing potential, fostering belonging, and creating opportunities for individuals of all ages to thrive. Our programs are led by compassionate, highly trained staff and devoted volunteers who bring both professional expertise and genuine care to every interaction.
          </li>

          <li>
            We offer a welcoming, inclusive space where young people and adults can explore their interests, build meaningful connections, and discover their strengths through a wide range of enriching recreational, educational, and therapeutic experiences.
          </li>
        </ul>
      </div>

    </section>

  );
};

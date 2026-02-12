import "../styles/contact.css";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import addresss from "../assets/addresss.png"
import website from "../assets/website.png"


export const Contact = () => {
  return (
    <div className="col-12 contact-main">
      <div className="app-container">
        <section className="contact-core">
          <div className="contact-right">
<div className="contact-item">
  <div className="icon-circle orange">
    <img src={addresss.src} alt="Honor" />
  </div>
  <h2>ADDRESSS</h2>
  <p>#204 LANGWELL</p>
  <p>COMMON SE</p>
  <p>AIRDRIE, AB</p>

</div>
            <div className="contact-item">
              <div className="icon-circle yellow">
              <img
                src={phone.src}
                alt="Phone"
                style={{ width: "80px", height: "auto" }}
              />
              </div>
              <h2>PHONE</h2>
              <p>587-703-8343</p>
              <p>587-998-9909</p>
              </div>
            <div className="contact-item">
              <div className="icon-circle green">
              <img
                src={email.src}
                alt="Person"
                style={{ width: "80px", height: "auto" }}
              />
              </div>

              <h2>EMAIL</h2>
              <p>JOURNEYOFHOPEINC@</p>
              <p>gmail.com</p>
            </div>
            <div className="contact-item">
              <div className="icon-circle dark">
            <img
                src={website.src}
                alt="empowerment"
                style={{ width: "80px", height: "auto" }}
              />
              </div>
              <h2>WEBSITE</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

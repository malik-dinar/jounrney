import Button from "../components/Button";
import { FooterSection } from "../components/FooterSections";
import "../styles/footer.css";
export const Footer = () => {
  const subheadings1 = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];
  const subheadings2 = ["Home", "Pricing", "Download", "About", "Service"];
  const subheadings3 = ["FAQ", "Features", "Contact", "Reporting"];
  const subheadings4 = ["+9747512018", "lanware@gmail.com", "Sreelakshmi"];
  return (
    <div className="col-12">
      <div className="app-container">
        <div className="col-12">
          <div className="col-12 footer-headings">
            <h1>Get Better Work</h1>
            <p>See why millions of people across 195 countries use Dash</p>
            <div className="col-12 footer-buttons">
              <div className="buttons-main">
                <Button
                  classname={"light"}
                  onClick={undefined}
                  text={"lanware.com"}
                />
              </div>
              <div className="buttons-main">
                <Button
                  classname={"blue"}
                  onClick={undefined}
                  text={"Try for Free"}
                />
              </div>
            </div>
          </div>

          <div className="col-12 ">
            <div className="footer-group">
              <FooterSection heading={"MRstudio"} subheading={subheadings1} />
              <FooterSection heading={"Links"} subheading={subheadings2} />
              <FooterSection heading={"Support"} subheading={subheadings3} />
              <FooterSection heading={"Contact us"} subheading={subheadings4} />
            </div>
          </div>

          <div className="col-12">
            <div className="col-12 footer-line"></div>
          </div>
          <div className="col-12">
            <div className="copy-left">
              <h5 className="copyleft-heading">
                Copyright & Design by Sreelakshmi
              </h5>
            </div>
            <div className="copy-right">
              <span className="copy">Terms of use</span>
              <span className="copy">Privacy Policy</span>
              {/* <a href="">About</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

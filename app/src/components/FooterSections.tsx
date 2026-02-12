import "../styles/components.css";
interface FooterProps {
  heading: string;
  subheading: string[];
}
export const FooterSection = (props: FooterProps) => {
  const { heading, subheading } = props;
  return (
    <div className="col-12" style={{ padding: "0 30px" }}>
      <div className="footer-sections col-12">
        <h4 className="footer-heading1 col-12">{heading}</h4>
        {subheading.map((i: any) => {
          return (
            <>
              <span className="footer-span col-12">{i}</span>
            </>
          );
        })}
      </div>
    </div>
  );
};

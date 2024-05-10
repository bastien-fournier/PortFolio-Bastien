import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.png";
import "../common/footer.css";

function Footer() {
  return (
    <>
      <div className="footer-class">
        <a
          href="http://www.linkedin.com/in/bastien-fournier1806"
          target="_blank"
        >
          <button className="footer-button" type="button">
            <img className="logo" src={Github} alt="Logo Github" />
          </button>
        </a>
        <p>By Bastien</p>
        <a
          href="http://www.linkedin.com/in/bastien-fournier1806"
          target="_blank"
        >
          <button className="footer-button" type="button">
            <img className="logo" src={Linkedin} alt="Logo Linkedin" />
          </button>
        </a>
      </div>
    </>
  );
}

export default Footer;

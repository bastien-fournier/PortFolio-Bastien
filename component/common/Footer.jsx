import { useState } from "react";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import "../common/footer.css";

function Footer() {
  const [link, setLink] = useState("https://github.com/bastien-fournier");

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <>
      <div className="footer-class">
        <img
          className="logo"
          onClick={handleClick}
          src={Github}
          alt="Logo Github"
        />
        <p>By Bastien</p>
        <a
          href="http://www.linkedin.com/in/bastien-fournier1806"
          target="_blank"
        >
          <button type="button">
            <img className="logo" src={Linkedin} alt="Logo Linkedin" />
          </button>
        </a>
      </div>
    </>
  );
}

export default Footer;

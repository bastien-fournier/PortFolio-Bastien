import "./../HomePage/card.css";

import ImgProfil from "./../../assets/profile-pic.png";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.png";

function About() {
  return (
    <div className="divClass">
      <h1>Bastien Fournier</h1>
      <h2>Développeur Web</h2>
      <img className="img" src={ImgProfil} alt="Photo Bastien" />
      <div className="div-link">
        <a href="https://github.com/bastien-fournier" target="_blank">
          <button className="button-link" type="button">
            <img
              className="logo-img"
              src={Github}
              alt="Lien vers GitHub Bastien"
            />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/bastien-fournier1806"
          target="_blank"
        >
          <button className="button-link" type="button">
            <img
              className="logo-img"
              src={Linkedin}
              alt="Lien vers Linkedin Bastien"
            />
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;

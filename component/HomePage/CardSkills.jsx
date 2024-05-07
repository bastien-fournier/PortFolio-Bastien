import "./cardSkills.css";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Javascript from "../../assets/javascript.svg";
import LogoReact from "../../assets/react.svg";

function CardSkills() {
  return (
    <>
      <div className="class-div">
        <h3>Mes compétences</h3>
      </div>

      <div className="div-classe">
        <h4>Front-End</h4>
        <div className="skill-cards">
          <span className="skill-card">
            <img src={Html} alt="Logo HTML" />
          </span>
          <span className="skill-card">
            <img src={Css} alt="Logo CSS" />
          </span>
          <span className="skill-card">
            <img src={Javascript} alt="Logo JavaScript" />
          </span>
          <span className="skill-card">
            <img src={LogoReact} alt="Logo React" />
          </span>
        </div>
      </div>
    </>
  );
}

export default CardSkills;

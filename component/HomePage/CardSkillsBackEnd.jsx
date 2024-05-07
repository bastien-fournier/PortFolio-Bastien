import "../HomePage/cardSkillsBackEnd.css";
import Node from "../../assets/node.svg";
import Express from "../../assets/express.svg";

function CardSkillsBackEnd() {
  return (
    <div className="skillCards">
      <h4>Back-End</h4>
      <div>
        <span className="skillCard">
          <img src={Node} alt="Logo Node" />
        </span>
        <span className="skillCard">
          <img src={Express} alt="Logo Express" />
        </span>
        <span className="skillCard"></span>
      </div>
    </div>
  );
}

export default CardSkillsBackEnd;

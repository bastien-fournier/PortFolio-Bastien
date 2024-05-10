import GitHub from "../../assets/github.svg";
import Figma from "../../assets/figma.svg";
import "../HomePage/diversCard.css";

function DiversCard() {
  return (
    <div className="div">
      <span className="span-divers">
        <h4>Divers</h4>
      </span>
      <div className="div-divers">
        <span>
          <img className="img-divers" src={GitHub} alt="Logo GitHub" />
        </span>
        <span>
          <img className="img-divers" src={Figma} alt="Logo Figma" />
        </span>
      </div>
    </div>
  );
}

export default DiversCard;

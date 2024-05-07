import GitHub from "../../assets/github.svg";
import Figma from "../../assets/figma.svg";
import "../HomePage/diversCard.css";

function DiversCard() {
  return (
    <div className="div">
      <h4>Divers</h4>
      <div>
        <span>
          <img src={GitHub} alt="Logo GitHub" />
        </span>
        <span>
          <img src={Figma} alt="Logo Figma" />
        </span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default DiversCard;

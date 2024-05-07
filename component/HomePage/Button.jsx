import "../HomePage/button.css";

import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="div-button">
      <button type="button" className="button">
        Télécharger mon CV
      </button>
      <button type="button" className="button">
        <Link to="/project"> Mes projets</Link>
      </button>
    </div>
  );
}

export default Button;

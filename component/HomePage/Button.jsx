import { useState } from "react";
import "../HomePage/button.css";

import Cv from "../../assets/cv-bastien-fournier.pdf";

import { Link } from "react-router-dom";

function Button() {
  // const [load, setLoad] = useState(null)

  // const upLoad = () => {

  // }

  return (
    <div className="div-button">
      <a href={Cv} download="Cv">
        <button type="button" className="button">
          Télécharger mon CV
        </button>
      </a>
      <button type="button" className="button">
        <Link to="/project"> Mes projets</Link>
      </button>
    </div>
  );
}

export default Button;

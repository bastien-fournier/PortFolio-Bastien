import { Link } from "react-router-dom";
import { useState } from "react";
import "../common/nav.css";

import burger from "../../assets/burger.svg";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <button
        type="button"
        className="menu-button"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <img src={burger} alt="menu button" />
      </button>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/"> HomePage</Link>
        </li>
        <li>
          <Link to="/project"> Mes projets</Link>
        </li>
        <li>
          <Link to="/contact"> Contactez-moi</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

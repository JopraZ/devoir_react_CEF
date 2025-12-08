import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav>
      <h1>JOHN DOE</h1>

      <div>
        <Link to="/" className="pages">HOME</Link>
        <Link to="/services" className="pages">SERVICES</Link>
        <Link to="/realisations" className="pages">RÉALISATIONS</Link>
        <Link to="/contact" className="pages">CONTACT</Link>
        <Link to="/mentions-legales" className="pages">MENTIONS LÉGALES</Link>
      </div>
    </nav>
  );
}

export default Navbar;

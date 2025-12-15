import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <h1>JOHN DOE</h1>
    
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="pages" onClick={closeMenu}>HOME</Link>
        <Link to="/services" className="pages" onClick={closeMenu}>SERVICES</Link>
        <Link to="/realisations" className="pages" onClick={closeMenu}>RÉALISATIONS</Link>
        <Link to="/contact" className="pages" onClick={closeMenu}>CONTACT</Link>
        <Link to="/mentions-legales" className="pages" onClick={closeMenu}>MENTIONS LÉGALES</Link>
      </div>
    </nav>
  );
}

export default Navbar;
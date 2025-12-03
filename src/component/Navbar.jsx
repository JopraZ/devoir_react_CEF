import { Link } from "react-router";
import "./Navbar.css"


function Navbar(){
    return (
        <header>
            <h1>JOHN DOE</h1>
            <div>
                <Link to href="../pages/Home" className="pages">HOME</Link>
                <Link to href="../pages/Services" className="pages">SERVICES</Link>
                <Link to href="../pages/Realisation" className="pages">RÉALISATION</Link>
                <Link to href="../pages/Contact"className="pages">CONTACT</Link>
                <Link to href="../pages/MentionLegales" className="pages">MENTION LÉGALES</Link>
            </div>

        </header>
    );
}

export default Navbar;
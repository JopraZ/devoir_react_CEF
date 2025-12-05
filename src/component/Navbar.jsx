import { Link } from "react-router";
import "./Navbar.css"



function Navbar(){
    return (
        <nav>
            <h1>JOHN DOE</h1>
            <div>
                <Link to="../pages/Home" className="pages">HOME</Link>
                <Link to="../pages/Services" className="pages">SERVICES</Link>
                <Link to="../pages/Realisation" className="pages">RÉALISATION</Link>
                <Link to="../pages/Contact"className="pages">CONTACT</Link>
                <Link to="../pages/MentionLegales" className="pages">MENTION LÉGALES</Link>
            </div>

        </nav>
    );
}

export default Navbar;
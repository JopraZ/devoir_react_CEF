import "./Home.css";
import Modale from "../component/modale";
import { useState } from "react";
export default function Home() {
    const [ isOpen, setIsOpen ] = useState(false)
    return(
        <body>
            <header className="contentHeader">
                <h1>Bonjour, je suis John Doe.</h1>
                <h2>Développeur full stack</h2>
                <button onClick={() => setIsOpen(true)} className="btn.header">En savoir plus</button>
                <Modale 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)} />
            </header>
            <main>    
            </main>
        </body>
    )
}
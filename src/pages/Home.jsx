import "./Home.css";
import Modale from "../component/modale";
import { useState } from "react";
import Progress from "../component/progressBar";


export default function Home() {
    const [ isOpen, setIsOpen ] = useState(false)
    return(
        <>
            <header className="contentHeader">
                <h1>Bonjour, je suis John Doe.</h1>
                <h2>Développeur full stack</h2>
                <button onClick={() => setIsOpen(true)} className="btn-header">En savoir plus</button>
                <Modale 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)} 
                 />
            </header>
            <main>    
                <div className="left-text-main">
                    <h2>A propos</h2>
                    <img src="/assets/images/john-doe-about.jpg" alt="Moi travaillant" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure saepe culpa ipsa, 
                    tenetur, dolore sed nobis dolor repellendus unde soluta deserunt inventore! Deserunt ipsum corporis 
                    ipsa? Veritatis sunt dolorum laboriosam.</p>
                </div>
                <div className="right-text-main">
                    <h2>Mes compétences</h2>
                    <Progress />
                </div>
            </main>
        </>
    )
}
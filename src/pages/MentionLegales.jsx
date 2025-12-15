import Accordion from 'react-bootstrap/Accordion';
import "./MentionLegales.css"

export default function LegalTerms() {

    return (
        <>
        <div className="legal-text">
            <h1>Mentions légales</h1>
            <hr className="legal-separator"/>
        </div>
        <div className="legal-accordion">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Editeur du site</Accordion.Header>
                        <Accordion.Body>
                        <h3>John Doe</h3>
                        <div className='legal-icon'>
                            <span class="bi bi-map no-italic"> 40 rue Laure Diebold</span>
                            <span class="bi bi-geo-alt no-italic" >69009 Lyon, France</span>
                            <span class="bi bi-phone no-italic"> 10 20 30 40 50</span>
                            <span class="bi bi-envelope-open-heart no-italic "> John.Doe@gmail.com</span>
                        </div>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                        <Accordion.Header>Hébergeur</Accordion.Header>
                        <Accordion.Body>
                        <h3>alwaysdata</h3>
                        <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                        <span>
                            <i class="bi bi-globe mr-3"></i>
                            <a class='mx-2'
                            href="https://www.alwaysdata.com/fr/"
                            target="_blank"
                            rel="noreferrer">
                            www.alwaysdata.com
                            </a>
                        </span>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                        <Accordion.Header>Crédits</Accordion.Header>
                        <Accordion.Body>
                        <h3>Crédits</h3>
                            <p>Ce site à été réaliser par John Doe, étudiant au 
                                <a class="mx-1"
                                href="www.centre-europeen-formation.fr"
                                target="_blank"
                                rel="noreferrer"
                                >
                                Centre Européen de Formation
                                </a>
                            </p>
                            <span className="fst-italic">
                            <p>Les images utilisées sur ce sit sont libre de droit et obtenues sur 
                                <a class="mx-1"
                                href="https://pixabay.com/fr/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                Pixabay
                                </a>
                            </p>
                            </span>
                            <span className="fst-italic">
                            <p>La favicon de ce site est fournie par 
                                <a class="mx-1"
                                href="https://www.flaticon.com/free-icons"
                                target="_blank"
                                rel="noreferrer"
                                >
                                John Doe Icons erstellt von Freepik - Flaticon
                                </a>
                            </p>
                            </span>
                            
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        </>
    );

}
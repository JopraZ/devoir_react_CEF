import "./Services.css"
import ServiceCard from "../component/serviceCard";

export default function Service() {
    return (
        <>
        <header className="service-header"></header>
        <div className="service-text">
            <h1>Mon offre de service</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <hr className="service-separator" />
        </div>
        
        <div className="service-card">

            <ServiceCard
            favicon = "bi-vector-pen"
            title ="UX Design"
            description ="L'UX Design est une discipline qui consiste à conceveoir des produits (sites web, applications mobiles, logiciels, objets connecté etc.)
            en plaçant l'utilisateur au centre des péoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible "
            titleTag="h3"
            align="center"
            />

            <ServiceCard
            favicon = "bi-code-slash"
            title ="Développement web"
            description ="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programation
                          (HTML,CSS,JavaScript,PHP, etc.) et des framework (Bootstrap,React,Agular etc.)"
            titleTag="h3"
            align="center"
            />

            <ServiceCard
            favicon = "bi-search"
            title ="Référencement"
            description ="Le référecement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter 
                          dans les résultats des moteurs de reherche(Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de quaifié sur le site"
            titleTag="h3"
            align="center"
            />
                        
        </div>
        </>
    )
}
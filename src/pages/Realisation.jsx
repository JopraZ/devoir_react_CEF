import "./Realisation.css"
import RealCard from "../component/RealCard"

export default function Realisation() {
    return (
    <>
        <header className="real-header"></header>
        
        <div className="real-text">
            <h1>Porfolio</h1>
            <p>Voici quelques-une de mes réalisation</p>
        </div>

        <div className="real-card">
        <RealCard
            imageUrl="/assets/images/portfolio/fresh-food.jpg"
            imageAlt="Un pannier de légumes"
            title="Fresh Food"
            description="Site de vente de produits frais en ligne"
            buttonText="Voir le site"
            secondaryDescription="Site réalisé avec PHP et MySQL"
        />
        <RealCard
            imageUrl="/assets/images/portfolio/restaurant-japonais.jpg"
            imageAlt="Un pannier de légumes"
            title="Restaurant Akira"
            description="Site de vente de produits frais en ligne"
            buttonText="Voir le site"
            secondaryDescription="Site réalisé avec WordPress"
        />
        <RealCard
            imageUrl="/assets/images/portfolio/espace-bien-etre.jpg"
            imageAlt="Un pannier de légumes"
            title="Espace bien-être"
            description="Site de vente de produits frais en ligne"
            buttonText="Voir le site"
            secondaryDescription="Site réalisé avec LARAVEL"
        />
        <RealCard
            imageUrl="/assets/images/portfolio/seo.jpg"
            imageAlt="Un pannier de légumes"
            title="SEO"
            description="Site de vente de produits frais en ligne"
            buttonText="Voir le site"
            secondaryDescription="Utilisation des outils SEO"
        />
        <RealCard
            imageUrl="/assets/images/portfolio/coder.jpg"
            imageAlt="Un pannier de légumes"
            title="Création d'une API"
            description="Site de vente de produits frais en ligne"
            buttonText="Voir le site"
            secondaryDescription="PHP - SYMFONY"
        />
        <RealCard
            imageUrl="/assets/images/portfolio/screens.jpg"
            imageAlt="Un pannier de légumes"
            title="Fresh Food"
            description="Site de vente de produits frais en ligne"
            buttonText="Voir le site"
            secondaryDescription="Site réalisé avec PHP"
        />
        </div>
    </>
    )
}
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./serviceCard.css"


const ServiceCard = ({
  // Props essentielles
  title,
  description,
  favicon,
  
  // Options de style
  titleTag: TitleTag = 'h3', // 'h1' à 'h6'
  align = 'center',
  className = '',
  
  isHoverable = true
}) => {
  // Contenu de base de la card
  const cardContent = (
    <div 
      className={`
        simple-card 
        text-${align} 
        ${isHoverable ? 'hoverable' : ''} 
        ${className}
      `}
    >
      {/* Favicon */}
      {favicon && (
    <div className="favicon-container">
        <i className={`bi ${favicon}`}></i>
    </div>
)}
      
      {/* Titre */}
      {title && (
        <TitleTag className="card-title">
          {title}
        </TitleTag>
      )}
      
      {/* Description */}
      {description && (
        <p className="card-description">
          {description}
        </p>
      )}
    </div>
  );


  return cardContent;
};

export default ServiceCard;
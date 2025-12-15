import 'bootstrap-icons/font/bootstrap-icons.css'
import "./serviceCard.css"


const ServiceCard = ({

  title,
  description,
  favicon,

  titleTag: TitleTag = 'h3', 
  align = 'center',
  className = '',
  
  isHoverable = true
}) => {

  const cardContent = (
    <div 
      className={`
        simple-card 
        text-${align} 
        ${isHoverable ? 'hoverable' : ''} 
        ${className}
      `}
    >
  
      {favicon && (
    <div className="favicon-container">
        <i className={`bi ${favicon}`}></i>
    </div>
)}
      
      {title && (
        <TitleTag className="card-title">
          {title}
        </TitleTag>
      )}

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
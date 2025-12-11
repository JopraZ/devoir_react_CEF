// ServiceCard.jsx
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ServiceCard({ 
  imageUrl, 
  imageAlt = "", 
  
  title, 
  description,
  secondaryDescription,
  buttonText,
  onButtonClick,

  width = '22rem',
  align = 'center',
  buttonVariant = 'primary'
}) {
  return (
    <Card 
    style={{ 
    width: width,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  }}
  className="shadow rounded-3"
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
      {/* Image */}
      {imageUrl && (
        <Card.Img 
          variant="top" 
          src={imageUrl} 
          alt={imageAlt || title}
          style={{ 
            height: '200px', 
            objectFit: 'cover' 
          }}
        />
      )}
      
      {/* Contenu */}
      <Card.Body className={`text-${align} p-0 pt-4`}>
        <Card.Title>{title}</Card.Title>
        {description && (
          <Card.Text className="mb-4">{description}</Card.Text>
        )}
        
        {/* Bouton */}
        <Button 
          variant={buttonVariant} 
          onClick={onButtonClick}
          className=" mb-3"
        >
          {buttonText}
        </Button>
        
        {/* Deuxième description avec bordure noire et fond gris */}
        {secondaryDescription && (
          <div className="border-top-grey bg-light pb-2 mt-1 pt-2">
            {secondaryDescription}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
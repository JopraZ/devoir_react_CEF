import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./Contact.css"


export default function Contact() {

    const GoogleMap = () => {

  return (
    <div className="map-container">
      <iframe
        title="Localisation de notre entreprise sur Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540515!2d4.796403975954872!3d45.778665712402564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1765448610094!5m2!1sfr!2sfr" 
        width="100%"
        height="400"
        style={{ 
          border: 0,
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginTop: '15px'
        }}
      ></iframe>
    </div>
  );
};

    return (
        <>
            <div className="contact-text">
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'un future collaboration, 
                    merci de remplir le formulaire de contact.</p>
                <hr class="separator"></hr>
            </div>
            <div className='contact-body'>
                <div className='contact-form'>
                    <h2 className='form-title'>Formulaire de contact</h2>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control className='mb-3' type="email" placeholder="Votre nom" />
                            <Form.Control className='mb-3' type="email" placeholder="Votre adresse email" />
                            <Form.Control className='mb-3' type="email" placeholder="Votre numéro de téléphone" />
                            <Form.Control className='mb-3' type="email" placeholder="Sujet" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder='Votre message' rows={10} />
                        </Form.Group>
                        <div className="text-center"> {/* Bootstrap class ou votre CSS */}
                        <Button variant='primary'> Envoyer</Button>
                        </div>
                    </Form>
                </div>

                <div className='contact-details'>
                    <h2 className='form-title'>Mes coordonées</h2>
                    <h3>John Doe</h3>
                    <div className='contact-icon mb-3'>
                        <span class="bi bi-map no-italic"> 40 rue Laure Diebold</span>
                        <span class="bi bi-geo-alt no-italic" >69009 Lyon, France</span>
                        <span class="bi bi-phone no-italic"> 10 20 30 40 50</span>
                        <span class="bi bi-envelope-open-heart no-italic "> John.Doe@gmail.com</span>
                        <GoogleMap/>
                    </div>
                </div>
            </div>
        </>
    )
}
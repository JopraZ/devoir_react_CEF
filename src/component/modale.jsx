import Card from "react-bootstrap/Card";
import "../component/modale.css"
export default function Modale({ isOpen, onClose }) {
    if (!isOpen) return null;
    
    return(
        <>
        <div className="modaleStyle">
         <Card style = {{width: '150ox'}}>
            <Card.Body>
                <div >
                    <button onClick={onClose}className="btn.modal">X</button>
                    <Card.Title>Mon profil GitHub</Card.Title>
                </div>
                <Card.Img variant="left" src="../../public/assets/portfolio/avatar.png" />
                <Card.Link href='https://github.com/JopraZ' target="blank">John Doe</Card.Link>
                <Card.Text>As we all know John Doe's idendity is unknow. Ijust wanted to contribute without being known.</Card.Text>
                <Card.Text>Repositories : 1</Card.Text>
                <Card.Text>Followers: 36</Card.Text>
                <Card.Text>Following: 0</Card.Text>
                <button onClick={onClose}className="btn.modal">Fermer</button>
            </Card.Body>           
        </Card>
        </div>
        </>
    )
};


export default function Modale({ isOpen, onClose }) {
    if (!isOpen) return null;
    
    return(
        <>
        <div className="modaleStyle">
            <button onClick={onClose}className="btn.modal">X</button>
            <p>Modale</p>
        </div>
        </>
    )
}
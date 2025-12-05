
export default function Modale({ isOpen, onClose }) {
    if (!isOpen) return null;

    return(
        <>
        <div className="modaleStyle">
            <button onClick={onClose}>X</button>
            <h2>Modale</h2>
        </div>
        </>
    )
}
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Realisation from "./pages/Realisation";
import MentionLegales from "./pages/MentionLegales";
import Services from "./pages/Services";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/MentionLegales" element={<MentionLegales/>} />
                <Route path="/Realisation" element={<Realisation/>} />
                <Route path="/Services" element={<Services/>} />
            </Routes>
        </>
    );
}

export default App;
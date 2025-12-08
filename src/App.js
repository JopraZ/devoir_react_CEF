import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisation from "./pages/Realisation";
import Contact from "./pages/Contact";
import MentionLegales from "./pages/MentionLegales";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/realisations" element={<Realisation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions-legales" element={<MentionLegales />} />
    </Routes>
  );
}

export default App;

import "./global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Accessibility from "./pages/Accessibility";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <div className="smooth-scroll">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';

import Events from './pages/Events';
import Publications from './pages/Publications';
import Impact from './pages/Impact';
import Gallery from './pages/Gallery';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Accessibility from './pages/Accessibility';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-amber-50 text-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />

            <Route path="/events" element={<Events />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
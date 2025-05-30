import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Plans } from './pages/Plans';
import { Exitos } from './pages/Exitos';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { CookiesPolicy } from './pages/legal/CookiesPolicy';
import { Terms } from './pages/legal/Terms';
import { Legal } from './pages/legal/Legal';
import { WebDesign } from './pages/services/WebDesign';
import { WebDevelopment } from './pages/services/WebDevelopment';
import { Companies } from './components/Companies';
import { Testimonios } from './components/Testimonios';
import { SEO } from './pages/services/SEO';
import { Confirmation } from "./pages/Confirmation";
import { WhatsappButton } from "./components/WhatsappButton";
import TagManager from 'react-gtm-module';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    const gtmId = import.meta.env.VITE_GTM_ID || "";
    TagManager.initialize({ gtmId });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Header currentLang={currentLang} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home currentLang={currentLang} />} />
          <Route path="/confirmation" element={<Confirmation currentLang={currentLang} />} />
          <Route path="/contact" element={<Contact currentLang={currentLang} />} />
          <Route path="/plans" element={<Plans currentLang={currentLang} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog currentLang={currentLang} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/services/web-design" element={<WebDesign currentLang={currentLang} />} />
          <Route path="/services/web-development" element={<WebDevelopment currentLang={currentLang} />} />
          <Route path="/services/seo" element={<SEO currentLang={currentLang} />} />
          <Route path="/exitos" element={<Exitos />} />

        </Routes>
        <Footer currentLang={currentLang} onLanguageChange={setCurrentLang} />
        <WhatsappButton />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;

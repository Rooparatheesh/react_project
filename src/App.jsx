import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedPlatform from './components/TrustedPlatform';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Navbar />
      <Hero />
      <TrustedPlatform />
      <Testimonials />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
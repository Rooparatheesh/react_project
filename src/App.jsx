// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
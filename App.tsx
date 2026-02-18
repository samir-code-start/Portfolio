import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechTicker } from './components/TechTicker';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-primary selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
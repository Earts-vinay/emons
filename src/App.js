import React from 'react';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <div>
      <HeroSection />
      <div style={{ height: '200vh',marginTop: "50rem", background: '#f5f5f5' }}>
        <p style={{ padding: '2rem',mt:10, textAlign: 'center' }}>
          Scroll down to see the video segment switch and overlay fade effect.
        </p>
      </div>
    </div>
  );
}

export default App;

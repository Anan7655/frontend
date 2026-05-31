import React from 'react';

function More() {
  return (
    <div className="container py-5" style={{ minHeight: '85vh' }}>
      <section className="section text-center mx-auto" style={{ maxWidth: '800px' }}>
        <h2 className="mb-4" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>
          More Features
        </h2>

        {/* Fluid hero image matching your layout shadow depths */}
        <img 
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg" 
          alt="Lee Sin Meta Splash Art" 
          className="img-fluid my-4 rounded shadow-lg border border-secondary"
          style={{ borderOpacity: 0.2 }}
        />

        {/* Clean semantic grid layout for the bullet features */}
        <div className="fs-5 text-secondary text-center px-2 mt-4">
          <p className="mb-3">
            Engage in high-stakes ranked play systems and community-run tournaments designed for highly competitive players.
          </p>
          <p className="mb-3">
            Anticipate regular seasonal card expansions introducing brand new tactical mechanics and fresh deck synergies.
          </p>
          <p className="mb-0 text-light fw-semibold">
            Test your skills against a constantly evolving meta ecosystem that consistently rewards adaptability and creative strategies.
          </p>
        </div>
      </section>
    </div>
  );
}

export default More;

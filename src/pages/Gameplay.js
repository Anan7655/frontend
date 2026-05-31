import React from 'react';

function Gameplay() {
  return (
    <div className="container py-5" style={{ minHeight: '85vh' }}>
      <section className="section text-center max-width-layout mx-auto" style={{ maxWidth: '800px' }}>
        <h2 className="mb-4" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>
          Gameplay Mechanics
        </h2>

        {/* Img fluid with matching shadow depth */}
        <img 
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg" 
          alt="Garen Strategy Splash" 
          className="img-fluid mb-5 rounded shadow-lg border border-secondary"
          style={{ borderOpacity: 0.2 }}
        />

        {/* Clean, readable typography layout */}
        <div className="fs-5 text-secondary text-center px-2">
          <p className="mb-4">
            Riftbound revolves around controlling dynamic battlefield zones rather than simply eliminating your opponents' assets.
          </p>
          <p className="mb-4">
            Players strategically deploy tactical units, cast game-altering spells, and assign powerful equipment pieces to dominate key territories.
          </p>
          <p className="mb-0 text-light fw-semibold">
            Ultimate victory comes down to calculating strategic risk, executing precise timing, and establishing superior positioning.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Gameplay;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [email, setEmail] = useState('');
  const [riotId, setRiotId] = useState('');
  const [region, setRegion] = useState('EUW');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, riotId, region, agree });
    alert('Registration Complete!');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div>
          <h1>Enter the Riftbound Universe</h1>
          <p className="lead">Strategy. Legends. Control the battlefield.</p>
          <Link to="/gameplay" className="btn btn-rift mt-3">Explore Gameplay</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section container text-center">
        <h2 className="mb-4">What is Riftbound?</h2>
        <img 
          src="https://leagueoflegends.com" 
          alt="Ashe Splash Art" 
          className="img-fluid mb-4 rounded shadow-lg" 
          style={{ maxWidth: '800px' }}
        />
        <p className="lead text-secondary">
          Riftbound is a strategic trading card game where players build decks around powerful Legends and compete for battlefield control.
        </p>
        <p className="text-muted">
          Victory isn't about brute force alone. It’s about positioning, timing, and mastering synergy between cards.
        </p>
      </section>

      {/* Features Grid */}
      <section className="section container">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Legends</h3>
              <p className="text-muted">Discover powerful champions and their unique playstyles.</p>
              <Link to="/legends" className="btn btn-rift">View Legends</Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <h3>Gameplay</h3>
              <p className="text-muted">Learn how battles unfold and strategies evolve.</p>
              <Link to="/gameplay" className="btn btn-rift">Learn More</Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <h3>More</h3>
              <p className="text-muted">Explore features, updates, and the evolving meta.</p>
              <Link to="/more" className="btn btn-rift">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section container text-center mb-5">
        <h2 className="mb-4">Nexus Night Participation</h2>
        <p className="text-muted mb-4">Register your interest to join exclusive Nexus Night events and compete in special Riftbound matches.</p>

        <div className="row justify-content-center text-start">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="p-4 rounded border border-secondary bg-dark bg-opacity-25">
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Riot Account ID</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="SummonerName#TAG" 
                  value={riotId}
                  onChange={(e) => setRiotId(e.target.value)}
                  required 
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Region</label>
                <select className="form-select" value={region} onChange={(e) => setRegion(e.target.value)}>
                  <option value="EUW">EUW</option>
                  <option value="EUNE">EUNE</option>
                  <option value="NA">NA</option>
                  <option value="KR">KR</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-check mb-4">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  required 
                />
                <label className="form-check-label text-muted">I agree to participate in Nexus Night events</label>
              </div>

              <button type="submit" className="btn btn-rift w-100">Submit Registration</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

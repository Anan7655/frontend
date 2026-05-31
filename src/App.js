import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Page Imports
import Home from './pages/Home';
import Legends from './pages/Legends';
import Gameplay from './pages/Gameplay';
import More from './pages/More';
import Lab from './pages/Lab';

function App() {
  return (
    <div className="d-flex flex-column min-h-screen">
      {/* Shared Global Top Navigation Menu */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold text-uppercase tracking-wider" to="/">
            Riftbound
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navMenu"
            aria-controls="navMenu" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/legends">Legends</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gameplay">Gameplay</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/more">More</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 ms-md-2 btn-rift rounded text-white" to="/lab">
                  Lab
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Dynamic Viewport Mount */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legends" element={<Legends />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/more" element={<More />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </main>

      {/* Shared Global Sticky Base Footer */}
      <footer>
        <div className="container text-center text-muted small">
          <p className="m-0">© 2026 Riftbound. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

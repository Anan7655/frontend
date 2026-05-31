import React, { useEffect, useRef, useState } from 'react';

const CHAMPION_POOL = [
  { name: "Ahri", role: "Mage", cost: 4 },
  { name: "Yasuo", role: "Fighter", cost: 5 },
  { name: "Lux", role: "Mage", cost: 3 },
  { name: "Darius", role: "Fighter", cost: 4 },
  { name: "Jinx", role: "Marksman", cost: 4 },
  { name: "Thresh", role: "Support", cost: 3 },
  { name: "Zed", role: "Assassin", cost: 5 },
  { name: "Ornn", role: "Tank", cost: 4 },
];

function Lab() {
  const [deck, setDeck] = useState([]);
  const [difficulty, setDifficulty] = useState("normal");
  const [notes, setNotes] = useState("");
  const [lastKey, setLastKey] = useState("—");

  const totalCost = deck.reduce((s, c) => s + c.cost, 0);
  const maxDeck = 6;

  const logRef = useRef(null);
  const counterRef = useRef(0);

  const addToDeck = (c) => {
    if (deck.length >= maxDeck) return;
    setDeck((d) => [...d, c]);
  };
  
  const removeFromDeck = (i) =>
    setDeck((d) => d.filter((_, idx) => idx !== i));
    
  const clearDeck = () => setDeck([]);

  const addLogEntry = () => {
    if (!logRef.current) return;
    counterRef.current += 1;
    const entry = document.createElement("div");
    entry.textContent = `Event #${counterRef.current} fired at ${new Date().toLocaleTimeString()}`;
    entry.className = "p-2 mb-2 rounded border border-secondary text-light small lab-log-entry";
    logRef.current.prepend(entry);
  };

  const clearLog = () => {
    if (logRef.current) logRef.current.innerHTML = "";
    counterRef.current = 0;
  };

  useEffect(() => {
    const onKey = (e) => setLastKey(e.key);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="container py-5" style={{ minHeight: '85vh' }}>
      
      {/* Header Section */}
      <header className="text-center mb-5">
        <h2 style={{ fontWeight: 'bold', letterSpacing: '1px' }}>
          <span className="btn-rift p-0 bg-transparent text-transparent bg-clip-text">
            Riftbound Lab
          </span>
        </h2>
        <p className="text-muted">
          Interactive showcase — deck building, media, tables and dynamic Events.
        </p>
      </header>

      {/* Deck Builder Card */}
      <div className="feature-card p-4 mb-4">
        <h3 className="h4 text-light mb-2">Deck Builder</h3>
        <p className="text-muted small mb-4">
          Pick up to {maxDeck} champions. H<sub>2</sub>O-cooled rigs recommended for 4K replays<sup>*</sup>.
        </p>

        <div className="row g-3">
          {CHAMPION_POOL.map((c) => (
            <div className="col-sm-6 col-md-3" key={c.name}>
              <button
                onClick={() => addToDeck(c)}
                disabled={deck.length >= maxDeck}
                className="w-100 text-start p-3 rounded text-light lab-pool-btn"
              >
                <div className="fw-bold">{c.name}</div>
                <div className="text-muted small">
                  {c.role} · cost {c.cost}
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 d-flex flex-wrap align-items-center justify-content-between gap-2 border-top border-secondary pt-3">
          <span className="text-muted small">
            Deck: <strong className="text-light">{deck.length}/{maxDeck}</strong> · Cost:{" "}
            <strong className="text-light">{totalCost}</strong>
          </span>
          <button onClick={clearDeck} className="btn btn-sm btn-outline-secondary rounded-pill px-3">
            Clear deck
          </button>
        </div>

        {deck.length > 0 && (
          <ul className="mt-3 list-unstyled d-flex flex-wrap gap-2 m-0 p-0">
            {deck.map((c, i) => (
              <li key={i}>
                <button
                  onClick={() => removeFromDeck(i)}
                  className="btn btn-rift btn-sm py-1 px-3 rounded-pill text-white fw-semibold shadow-sm"
                  style={{ fontSize: '0.75rem' }}
                  title="Click to remove"
                >
                  {c.name} ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Role Stats Table Card */}
      <div className="feature-card p-4 mb-4">
        <h3 className="h4 text-light mb-4">Role Stats</h3>
        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover border-secondary m-0 align-middle">
            <thead>
              <tr className="border-secondary">
                <th className="px-3 py-2 text-start">Faction</th>
                <th className="px-3 py-2 text-start">Champion</th>
                <th className="px-3 py-2 text-start">Role</th>
                <th className="px-3 py-2 text-end">Power</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr>
                <td rowSpan={3} className="px-3 py-2 align-top fw-bold text-light border-secondary">Noxus</td>
                <td className="px-3 py-2 text-light border-secondary">Darius</td>
                <td className="px-3 py-2 border-secondary">Fighter</td>
                <td className="px-3 py-2 text-end text-light border-secondary">92</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-light border-secondary">Katarina</td>
                <td className="px-3 py-2 border-secondary">Assassin</td>
                <td className="px-3 py-2 text-end text-light border-secondary">88</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-light border-secondary">Swain</td>
                <td className="px-3 py-2 border-secondary">Mage</td>
                <td className="px-3 py-2 text-end text-light border-secondary">85</td>
              </tr>
              <tr>
                <td rowSpan={2} className="px-3 py-2 align-top fw-bold text-light border-secondary">Demacia</td>
                <td className="px-3 py-2 text-light border-secondary">Garen</td>
                <td className="px-3 py-2 border-secondary">Fighter</td>
                <td className="px-3 py-2 text-end text-light border-secondary">90</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-light border-secondary">Lux</td>
                <td className="px-3 py-2 border-secondary">Mage</td>
                <td className="px-3 py-2 text-end text-light border-secondary">87</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-muted" style={{ fontSize: '0.75rem' }}>
          Formula: P = base<sup>1.2</sup> + synergy<sub>team</sub>
        </p>
      </div>

      {/* Media Elements Grid */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="feature-card p-4 h-100">
            <h3 className="h4 text-light mb-4">Theme Audio</h3>
            <audio controls className="w-100" src="https://wiki.leagueoflegends.com/en-us/images/Jinx_CrimeCity_SFX_Dance_Music.ogg?f9bab" >
              Your browser does not support audio.
            </audio>
            <p className="mt-3 text-muted mb-0" style={{ fontSize: '0.75rem' }}>
              Sample track — replace with the official Riftbound theme.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="feature-card p-4 h-100">
            <h3 className="h4 text-light mb-4">Gameplay Trailer</h3>
            <video 
              controls 
              className="w-100 rounded border border-secondary border-opacity-20"
              poster="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            >
              Your browser does not support video.
            </video>
          </div>
        </div>
      </div>

      {/* Match Preferences Card */}
      <div className="feature-card p-4 mb-4">
        <h3 className="h4 text-light mb-4">Match Preferences</h3>

        <fieldset className="mb-4">
          <legend className="text-light small fw-medium mb-2">Difficulty</legend>
          <div className="d-flex flex-wrap gap-4">
            {["easy", "normal", "hard", "nightmare"].map((d) => (
              <label key={d} className="d-flex align-items-center gap-2 text-muted text-capitalize small cursor-pointer">
                <input
                  type="radio"
                  name="difficulty"
                  value={d}
                  checked={difficulty === d}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="form-check-input m-0"
                />
                <span>{d}</span>
              </label>
            ))}
          </div>
          <p className="mt-2 text-muted" style={{ fontSize: '0.75rem' }}>
            Selected: <strong className="text-light text-capitalize">{difficulty}</strong>
          </p>
        </fieldset>

        <div className="mb-2">
          <label className="form-label text-light small fw-medium">Strategy notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="Describe your opening, mid-game and late-game plan..."
            className="form-control"
          />
          <p className="mt-1 text-muted text-end mb-0" style={{ fontSize: '0.75rem' }}>{notes.length} chars</p>
        </div>
      </div>

      {/* Event Log Card */}
      <div className="feature-card p-4">
        <h3 className="h4 text-light mb-2">Event Log</h3>
        <p className="text-muted small mb-4">
          Click the button to inject DOM nodes. Press any key — last key:{" "}
          <kbd className="bg-dark bg-opacity-50 text-light border border-secondary px-2 py-0.5 font-mono rounded small mx-1">
            {lastKey}
          </kbd>
        </p>
        <div className="d-flex gap-3 mb-4">
          <button onClick={addLogEntry} className="btn btn-rift px-4 py-2 fw-semibold">
            Fire event
          </button>
          <button onClick={clearLog} className="btn btn-outline-secondary rounded-pill px-4 py-2">
            Clear
          </button>
        </div>

        <div
          ref={logRef}
          className="rounded border border-secondary border-opacity-40 p-3 bg-dark bg-opacity-20 overflow-y-auto"
          style={{ maxHeight: '240px', minHeight: '60px' }}
        />
      </div>

    </div>
  );
}

export default Lab;

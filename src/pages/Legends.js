import React from 'react';

const LEGENDS_DATA = [
  {
    name: 'Ornn',
    description: 'Forge god scaling into late-game dominance.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg'
  },
  {
    name: 'Renata Glasc',
    description: 'Controls economy and tempo.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg'
  },
  {
    name: 'Yasuo',
    description: 'Fast and precise combat style.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg'
  },
  {
    name: 'Ahri',
    description: 'Charm and mobility define her strategy.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg'
  },
  {
    name: 'Darius',
    description: 'Overwhelms enemies with strength.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg'
  },
  {
    name: 'Lux',
    description: 'Balanced magic offense and support.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg'
  },
  {
    name: 'Zed',
    description: 'Deadly shadow assassin.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg'
  },
  {
    name: 'Jinx',
    description: 'Chaos and destruction unleashed.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg'
  },
  {
    name: 'Thresh',
    description: 'Dark warden controlling souls.',
    image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg'
  }
];

function Legends() {
  return (
    <div className="container py-5" style={{ minHeight: '85vh' }}>
      <h2 className="text-center mb-5" style={{ fontWeight: 'bold', letterSpacing: '1px' }}>
        Meet the Legends
      </h2>

      <div className="row g-4">
        {LEGENDS_DATA.map((legend, index) => (
          <div className="col-md-4" key={index}>
            <div className="legend-card p-3 text-center h-100 d-flex flex-column justify-content-between">
              <div>
                <img 
                  src={legend.image} 
                  alt={`${legend.name} Splash Art`} 
                  className="legend-img" 
                />
                <h4>{legend.name}</h4>
              </div>
              <p>{legend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legends;

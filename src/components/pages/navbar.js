 import React, { useState } from 'react';
import Team from './teams copy'; // Import Team component
import Players from './players'; // Import Players component
import Matchs from './matchs'; // Import Players component
import Details from './details'; // Import Players component
import Points from './points copy'; // Import Points component
import Teamsform from '../form/teamsform';

const Vimal = () => {


  const [activeTab, setActiveTab] = useState('points'); // Track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='container'>
      <nav>
        <button className={activeTab === 'teams' ? 'active' : ''} onClick={() => handleTabClick('teams')}>Teams</button>
        <button className={activeTab === 'players' ? 'active' : ''} onClick={() => handleTabClick('players')}>Players</button>
        <button className={activeTab === 'matchs' ? 'active' : ''} onClick={() => handleTabClick('matchs')}>Matchs</button>
        <button className={activeTab === 'details' ? 'active' : ''} onClick={() => handleTabClick('details')}>Details</button>
        <button className={activeTab === 'points' ? 'active' : ''} onClick={() => handleTabClick('points')}>Points</button>
        <button className={activeTab === 'teamsform' ? 'active' : ''} onClick={() => handleTabClick('teamsform')}>Teamsform</button>
      
      </nav>
      <main>
        {activeTab === 'teams' && <Team />}  {/* Render Team component when 'teams' is active */}
        {activeTab === 'players' && <Players />}  {/* Render Players component when 'players' is active */}
        {activeTab === 'matchs' && <Matchs />}  {/* Render Players component when 'players' is active */}
        {activeTab === 'details' && <Details />}  {/* Render Players component when 'players' is active */}
        {activeTab === 'points' && <Points />}  {/* Render Points component when 'points' is active */}
        {activeTab === 'teamsform' && <Teamsform />}
      </main>
    </div>
  );
}



export default Vimal;
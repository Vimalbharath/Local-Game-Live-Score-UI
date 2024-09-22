 import React, { useState } from 'react';
import Team from './teams copy'; // Import Team component
import Players from './players'; // Import Players component
import Matchs from './matchs'; // Import Players component
import Details from './details'; // Import Players component
import Points from './points copy'; // Import Points component
import Teamsform from '../form/teamsform';
import PlayerForm from '../form/playerform';
import Matchform from '../form/matchform';
import Detailsform from '../form/detailsform';

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
        <button className={activeTab === 'playerform' ? 'active' : ''} onClick={() => handleTabClick('playerform')}>PlayerForm</button>
        <button className={activeTab === 'matchform' ? 'active' : ''} onClick={() => handleTabClick('matchform')}>Matchform</button>
        <button className={activeTab === 'detailsform' ? 'active' : ''} onClick={() => handleTabClick('detailsform')}>Detailsform</button>
      </nav>
      <main>
        {activeTab === 'teams' && <Team />}  {/* Render Team component when 'teams' is active */}
        {activeTab === 'players' && <Players />}  {/* Render Players component when 'players' is active */}
        {activeTab === 'matchs' && <Matchs />}  {/* Render Players component when 'players' is active */}
        {activeTab === 'details' && <Details />}  {/* Render Players component when 'players' is active */}
        {activeTab === 'points' && <Points />}  {/* Render Points component when 'points' is active */}
        {activeTab === 'teamsform' && <Teamsform />}
         {activeTab === 'playerform' && <PlayerForm />}
          {activeTab === 'matchform' && <Matchform />}
          {activeTab === 'detailsform' && <Detailsform />}
          
      </main>
    </div>
  );
}



export default Vimal;
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'
import { bookApi } from '../misc/BookApi'

const Detailsform = () => {
  const [teams, setTeams] = useState([]);
  const [newTeamName, setNewTeamName] = useState('');
   const [newTeamId, setNewTeamId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const Auth = useAuth()
  const user = Auth.getUser()

  
  const handleAddTeam = async () => {
    // try {
      const team = { teamid: newTeamId,name: newTeamName }
      if (!(team.teamid && team.name)) {
        return
      }
      await bookApi.addTeam(user, team)
      await bookApi.addTeaminPoint(user,team,team.teamid);
      alert("Team added");
   
  }

  return (
    <div>
      <h2>Teams</h2>
     
      <div>
        <input
          type="number"
          value={newTeamId}
          onChange={(e) => setNewTeamId(e.target.value)}
          placeholder="Enter new team Id"
        />
        <input
          type="text"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
          placeholder="Enter new team name"
        />
        <button onClick={handleAddTeam}>Add Team</button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Detailsform;
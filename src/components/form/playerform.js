import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'
import { bookApi } from '../misc/BookApi'

const PlayerForm = () => {
  const [teams, setTeams] = useState([]);
  const [newTeamName, setNewTeamName] = useState('');
   const [newTeamId, setNewTeamId] = useState('');
   const [newAge, setNewAge] = useState('');
   const [whichteam, setWhichteam] = useState('');
   
  const [errorMessage, setErrorMessage] = useState('');
  const Auth = useAuth()
  const user = Auth.getUser()

  // const fetchTeams = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/api/admin/teams');
  //     const data = await response.json();
  //     setTeams(data);
  //   } catch (error) {
  //     console.error('Error fetching teams:', error);
  //     setErrorMessage('Failed to fetch teams');
  //   }
  // };

  // const addTeam = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/api/admin/team', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ teamid: newTeamId,name: newTeamName }),
  //     });

  //     if (response.ok) {
  //       //fetchTeams();
  //       setNewTeamName('');
  //       setErrorMessage('');
  //     } else {
  //       const data = await response.json();
  //       setErrorMessage(data.message || 'Failed to add team');
  //     }
  //   } catch (error) {
  //     console.error('Error adding team:', error);
  //     setErrorMessage('Failed to add team');
  //   }
  // };

  // useEffect(() => {
  //   fetchTeams();
  // }, []);
  const handleAddPlayer = async () => {
    // try {
      const team = { playerId: newTeamId,name: newTeamName,age:newAge,whichteam }
      if (!(team.playerId && team.name && team.age)) {
        return
      }
      await bookApi.addPlayer(user,team,whichteam)
      alert("Player added");
    //   clearBookForm()
    //   await handleGetBooks()
    // } catch (error) {
    //   handleLogError(error)
    // }
  }

  return (
    <div>
      <h2>Player</h2>
      {/* <ul>
        {teams.map((team) => (
          <li key={team.teamId}>{team.name}</li>
        ))}
      </ul> */}
      <div>
        <input
          type="text"
          value={newTeamId}
          onChange={(e) => setNewTeamId(e.target.value)}
          placeholder="Enter new  Id"
        />
        <input
          type="text"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
          placeholder="Enter new  name"
        />
        <input
          type="number"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
          placeholder="Enter new Age"
        />
        <input
          type="number"
          value={whichteam}
          onChange={(e) => setWhichteam(e.target.value)}
          placeholder="Enter existing team"
        />
        <button onClick={handleAddPlayer}>Add Player</button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default PlayerForm;
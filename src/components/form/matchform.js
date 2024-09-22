import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'
import { bookApi } from '../misc/BookApi'

const Matchform = () => {
  const [teams, setTeams] = useState([]);
   const [newTeamData, setNewTeamData] = useState({
    date: "", // Initialize with an empty string for the date
  });
   const [newTeamId, setNewTeamId] = useState('');
   const[team1id,setTeam1id]=useState('');
   const[team2id,setTeam2id]=useState('');
   const isplayed=false;
  const [errorMessage, setErrorMessage] = useState('');
  const Auth = useAuth()
  const user = Auth.getUser()

 
  const handleAddMatch = async () => {
    // try {
      const match = { matchid: newTeamId,date: newTeamData.date,isplayed,team1id,team2id }
      if (!(match.matchid && match.date)) {
        return
      }
      await bookApi.addMatch(user,match,team1id,team2id)
      alert("Match added");
  }
  const handleDateChange = (e) => {
    setNewTeamData({
      ...newTeamData,
      date: e.target.value,
    });
  };

  return (
    <div>
      <h2>Match</h2>
      <div>
        <input
          type="number"
          value={newTeamId}
          onChange={(e) => setNewTeamId(e.target.value)}
          placeholder="Enter new match Id"
        />
       <input
        type="date"
        value={newTeamData.date} // Use the date prop within newTeamData
        onChange={handleDateChange}
        placeholder="Enter date"
      />
        <input
          type="number"
          value={team1id}
          onChange={(e) => setTeam1id(e.target.value)}
          placeholder="Enter team1id"
        />
        <input
          type="number"
          value={team2id}
          onChange={(e) => setTeam2id(e.target.value)}
          placeholder="Enter team2id"
        />
        <button onClick={handleAddMatch}>Add Team</button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Matchform;
import React, { useState, useEffect } from 'react';

const url = 'http://localhost:8080/api/public/points';

const Players = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTeams(data);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <h3>Points Table</h3>
      <table className="points-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.team.teamid}>
              <td>{team.team.name}</td>
              <td>{team.matchplayed}</td>
              <td>{team.matchwon}</td>
              <td>{team.matchlost}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Players;
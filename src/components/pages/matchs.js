import React, { useState, useEffect } from 'react';

const url = 'http://localhost:8080/api/public/matchs';

const Matches = () => {
  const [matches, setMatches] = useState([]);

  const getMatches = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMatches(data);
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <>
      <h3>Matches</h3>
      <table className="matches-table">
        <thead>
          <tr>
            <th>Match ID</th>
            <th>Teams</th>
            <th>Date</th>
            <th>Played</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.matchid}>
              <td>{match.matchid}</td>
              <td>
                {match.team1.name} vs {match.team2.name}
              </td>
              <td>{new Date(match.date).toLocaleDateString()}</td>
              <td>{match.played ? 'Yes' : 'No'}</td>
              <td>{new Date(match.date).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Matches;

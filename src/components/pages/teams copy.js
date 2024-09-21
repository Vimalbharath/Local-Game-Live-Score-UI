import React, { useState, useEffect } from 'react';

const url = 'http://localhost:8080/api/public/teams';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null); // Track selected team

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTeams(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleTeamClick = (team) => {
    setSelectedTeam(team); // Update selected team on click
  };

  return (
    <>
      <h3>Teams</h3>
      <ul className='users'>
        {teams.map((team) => (
          <li key={team.teamid}>
            <div onClick={() => handleTeamClick(team)}>
              <h4>{team.name}</h4>
            </div>
          </li>
        ))}
      </ul>

      {selectedTeam && (
        <div>
          <h2>Players for {selectedTeam.name}</h2>
          {selectedTeam.players.length > 0 ? (
            <ul>
              {selectedTeam.players.map((player) => (
                <li key={player.playerId}>
                  <p>
                    {player.name} ({player.age}) - {player.skill.length > 0 && player.skill.map((skill) => skill.name).join(', ')}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Players Found</p>
          )}
        </div>
      )}
    </>
  );
};

export default Teams;
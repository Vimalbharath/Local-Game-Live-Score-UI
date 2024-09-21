import React, { useState, useEffect } from 'react';

const url = 'http://localhost:8080/api/public/details';

const MatchDetails = () => {
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDetails(data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <h3>Match Details</h3>
      {details.map((detail) => (
        <div key={detail.detailsid} className="match-details">
          <h4>Match {detail.detailsid}</h4>
          <p>
            <strong>Match:</strong> {detail.match.team1.name} vs {detail.match.team2.name}
          </p>
          <p>
            <strong>Date:</strong> {new Date(detail.match.date).toLocaleDateString()}
          </p>
          <p>
            <strong>Toss:</strong> {detail.toss}
          </p>
          <p>
            <strong>Innings 1 Score:</strong> {detail.innings1Score}
          </p>
          <p>
            <strong>Innings 2 Score:</strong> {detail.innings2Score}
          </p>
          <p>
            <strong>Winner:</strong> {detail.winner.name}
          </p>
          <p>
            <strong>Man of the Match:</strong> {detail.manOfTheMatch.name} ({detail.manOfTheMatch.skill[0].name})
          </p>
        </div>
      ))}
    </>
  );
};

export default MatchDetails;
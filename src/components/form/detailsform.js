import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'
import { bookApi } from '../misc/BookApi'

const Detailsform = () => {
  const [matchId, setMatchId] = useState(2);
  const [detailsid, setDetailsId] = useState(2);
  const [tournamentId, setTournamentId] = useState(1);
  const [seasonId, setSeasonId] = useState(1);
  const [tossWinner, setTossWinner] = useState('CSK');
  const [innings1Score, setInnings1Score] = useState(200);
  const [innings2Score, setInnings2Score] = useState(180);
  const Auth = useAuth()
  const user = Auth.getUser()

 const handleAddDetails = async () => {
    // try {
      const details = { matchid: matchId,detailsid,teamid:tournamentId,playerid:seasonId,tossWinner,innings1Score,innings2Score }
      //await bookApi.addMatchinDetails(user,details,details.matchid)
      //await bookApi.addDetails(user,details,details.detailsid,details.teamid,details.playerid,details.tossWinner,details.innings1Score,details.innings2Score)
       await bookApi.addDetailsPoint(user,details,details.detailsid);
      alert("Match added");
  }

  return (
    <form onSubmit={handleAddDetails}>
      <label>Match ID:</label>
      <input type="number" value={matchId} onChange={(e) => setMatchId(parseInt(e.target.value))} />
      <label>Details ID:</label>
      <input type="number" value={detailsid} onChange={(e) => setDetailsId(parseInt(e.target.value))} />

      <label>Winner:</label>
      <input type="number" value={tournamentId} onChange={(e) => setTournamentId(parseInt(e.target.value))} />

      <label>Man of Match: </label>
      <input type="number" value={seasonId} onChange={(e) => setSeasonId(parseInt(e.target.value))} />

      <label>Toss Winner:</label>
      <input type="text" value={tossWinner} onChange={(e) => setTossWinner(e.target.value)} />

      <label>Innings 1 Score:</label>
      <input type="number" value={innings1Score} onChange={(e) => setInnings1Score(parseInt(e.target.value))} />

      <label>Innings 2 Score:</label>
      <input type="number" value={innings2Score} onChange={(e) => setInnings2Score(parseInt(e.target.value))} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Detailsform;
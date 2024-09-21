import React, { useState, useEffect } from 'react';

const url = 'http://localhost:8080/api/public/players';


// second argument

const Players = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Players</h3>
      <ul className='users'>
        {users.map((user) => {
          const { playerId, name,age} = user;
          return (
            <li key={playerId}>
             <div><h4 className='player'>{playerId}</h4></div> 
              <div>
                <h4>      Name : {name}</h4>
                <h4>      Age : {age}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Players;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Polling.css';
function Polling() {
  const navigate = useNavigate();

  // Use state to manage poll data
  const [pollData, setPollData] = useState({
    Vijay: 0,
    Ajith: 0,
    Surya: 0,
    Karthi: 0,
  });

  // Function to handle vote
  const handleVote = (pollOption) => {
    setPollData((prevData) => ({
      ...prevData,
      [pollOption]: prevData[pollOption] + 1,
    }));
  };

  // Function to handle logout
  const handleLogout = () => {
    // Navigate to the home page on logout
    navigate('/');
  };

  return (
    <div>
      <h2>Polling Page</h2>

      {/* Ellie Goulding Poll */}
      <div>
        <h3>Vijay</h3>
        <p>{`Votes: ${pollData.Vijay}`}</p>
        <button onClick={() => handleVote('Vijay')}>Vote</button>
      </div>

      {/* Ed Sheeran Poll */}
      <div>
        <h3>Ajith</h3>
        <p>{`Votes: ${pollData.Ajith}`}</p>
        <button onClick={() => handleVote('Ajith')}>Vote</button>
      </div>

      {/* Sam Smith Poll */}
      <div>
        <h3>Surya</h3>
        <p>{`Votes: ${pollData.Surya}`}</p>
        <button onClick={() => handleVote('Surya')}>Vote</button>
      </div>

      {/* Taylor Swift Poll */}
      <div>
        <h3>Karthi</h3>
        <p>{`Votes: ${pollData.Karthi}`}</p>
        <button onClick={() => handleVote('Karthi')}>Vote</button>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Polling;
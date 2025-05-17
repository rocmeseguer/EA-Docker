import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [hits, setHits] = useState(null);

  const fetchHits = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/counter`);
      setHits(response.data.number);
    } catch (error) {
      console.error('Error fetching hits:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>API Hit Counter</h1>
      <button onClick={fetchHits}>
        Count Hit
      </button>
      {hits !== null && (
        <p>Total hits: {hits}</p>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function Interact() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/interact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: userInput }),
    });
    const result = await res.json();
    setResponse(result.response);
  };

  return (
    <div>
      <h2>Interact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ask a question:</label>
          <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Interact;

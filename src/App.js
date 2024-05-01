import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(`${process.env.REACT_APP_CHATGPT_CLONE_BACKEND_URL}/api/chat`, { prompt: query });
      setResponse(result.data.message);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Failed to fetch response.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Ask something..."
        />
        <button type="submit">Send</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';

function App() {
  const [todos] = useState(['Learn Javascript', 'Learn React']);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amir Learn React
        </a>
        <TodoList todoList={todos} />
        <div>
          <input type="text" />
          <button>Add Todo</button>
        </div>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';

function App() {
  const [todos] = useState([
    { id: 1, name: 'Learn Javascript', complete: false },
    { id: 2, name: 'Learn React', complete: false },
    { id: 3, name: 'Build SPA', complete: false },
    { id: 4, name: 'Build server-rendered website using Next.js', complete: false },
    { id: 5, name: 'Build static content-oriented website using Gatsby', complete: false },
  ]);
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

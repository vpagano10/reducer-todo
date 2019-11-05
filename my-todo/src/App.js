import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>Todo App</div>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

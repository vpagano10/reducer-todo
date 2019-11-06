import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Reducer, { initialState } from './reducers/Reducer';
import styled from 'styled-components';
import './App.css';

const Div = styled.div`
  background-color: lightblue;
  color: firebrick;
`;
const H1 = styled.h1`
  color: navy;
`;

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <div className="App">
      <Div>
        <H1>Todo App</H1>
      <div>
        <TodoForm dispatch={dispatch} state={state} />
        <TodoList dispatch={dispatch} state={state} />
      </div>
      </Div>
    </div>
  );
}

export default App;

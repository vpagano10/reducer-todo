import React from 'react';
// import AppReducer, { initialState } from '../reducers/AppReducer';

const TodoForm = () => {
    return (
        <form>
            <input
            type='text'
            name='item'
            placeholder='todo'
            /><br />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default TodoForm;
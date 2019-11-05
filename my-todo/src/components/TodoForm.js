import React from 'react';
import AppReducer, { initialState } from '../reducers/AppReducer';

const TodoForm = () => {
    return (
        <form>
            <input
            type='text'
            name='item'
            placeholder='todo'
            /><br />
            <textarea
            name='notes'
            placeholder='notes'
            /><br />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default TodoForm;
import React, { useReducer, useState } from 'react';

const TodoList = ({ state, dispatch }) => {
    const toggleItem = todo => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: todo });
    };

    return (
        <div>
            {state.todos.map(item => (
                <div>
                   <p onClick={() => toggleItem(item)}>{item.item}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoList;
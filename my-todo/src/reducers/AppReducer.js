import React, { useReducer, useState } from 'react';

const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return { 
                ...state, 
                item: state.item = action.payload, 
                completed: false, 
                id: Date.now() 
            };
        // case 'TOGGLE_COMPLETE':
        //     return { completed: true };
        // case 'CLEAR_COMPLETE':
        //     return {
        //         item: null,
        //         completed: null,
        //         id: null
        //     };
        default:
            throw new Error('No action matched');
    }
};

const AppReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAdd = () => {
        dispatch({ type: 'ADD_TODO' });
    };

    // const handleToggle = () => {
    //     dispatch({ type: 'TOGGLE_COMPLETE' });
    // };

    // const handleClear = () => {
    //     dispatch({ type: 'CLEAR_COMPLETE' });
    // };
    
    return (
        <div>
            <p>Item: {state.item}</p>
            {/* <p onClick={handleToggle}>{state.completed}</p> */}
            <p>Id: {state.id}</p>

            <button type='button' onClick={handleAdd}>Add</button>
            {/* <button type='button' onClick={handleClear}>Clear</button> */}
        </div>
    )
}

export default AppReducer;
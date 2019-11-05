import React, { useReducer, useState } from 'react';

const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

const AppReducer = (state, action) => {
    // if (action.type === 'ADD_TODO') {
    //     return { ...state, todos: state.todos = action.payload }
    // } else {
    //     return null;
    // }

    // switch(action.type) {
    //     case 'ADD_TODO':
    //         return { ...state, todo: action.payload };
    //     default:
    //         throw new Error('No action matched');
    // }

    return '';
};

export default AppReducer;
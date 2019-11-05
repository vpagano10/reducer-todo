import React, { useReducer, useState } from 'react';
import AppReducer, { initialState } from '../reducers/AppReducer';
import { Reducer } from '../reducers/AppReducer';

function TodoList() {
    return (
        <div>
            <AppReducer />
        </div>
    )
}

export default TodoList;
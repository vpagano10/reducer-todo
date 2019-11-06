import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    padding: 2%;
    width: 75%;
    margin: 0 auto;
    margin-top: 2%;
    margin-bottom: 2%;
    background-color: lightblue;
    border: 4px solid lightseagreen;
    border-radius: 5px;
`;
const Input = styled.input`
    padding: 2%;
    width: 25%;
    border: 2px solid lightseagreen;
    border-radius: 5px;
`;
const ButtonDiv = styled.div`
    display: flex
    justify-content: center;
`;
const Button = styled.button`
    padding: 1%;
    margin: 1%;
    width: 15%;
    font-size: 1.2rem;
    background-color: transparent;
    color: dodgerblue;
    border: 2px solid lightseagreen;
    border-radius: 5px;
    &:hover {
        background-color: dodgerblue;
        color: ivory;
        border: 2px solid firebrick;
    }
`;

const Todos = ({ dispatch }) => {
    const [todo, setTodo] = useState('');

    const handleChanges = e => {
        setTodo(e.target.value);
    };

    const addTodo = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo });
    };

    const clearTodo = e => {
        e.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETE' });
    };

    return (
        <Form>
            <Input
            type='text'
            name='todo'
            placeholder='todo'
            onChange={handleChanges}
            value={todo}
            /><br />
            <ButtonDiv>
                <Button type='submit' onClick={addTodo}>Add</Button>
                <Button type='submit' onClick={clearTodo}>Clear</Button>
            </ButtonDiv>
        </Form>
    )
}

export default Todos;
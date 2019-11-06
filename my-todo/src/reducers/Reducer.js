export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

const Reducer = (state, action) => {
    switch(action.type) {
        // ADD
        case 'ADD_TODO':
            const todo = { 
                item: action.payload, 
                completed: false, 
                id: Date.now() 
            };
            if (todo.item !== '') {
                return {
                    ...state,
                    todos: [...state.todos, todo]
                };
            } else {
                return state
            };
        // TOGGLE
        case 'TOGGLE_COMPLETE':
            return { 
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                        return todo;
                    }
                })
             };
        // CLEAR
        case 'CLEAR_COMPLETE':
            return { todos: state.todos.filter(todo => !todo.completed) };
        // DEFAULT
        default:
            throw new Error('No action matched');
    }
};


export default Reducer;
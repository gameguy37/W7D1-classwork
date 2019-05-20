import todosReducer from './todos_reducer';


const rootReducer = (state = {}, action) => {
    return {
        todos: todosReducer(state.todos, action),
    };
};

export default rootReducer;
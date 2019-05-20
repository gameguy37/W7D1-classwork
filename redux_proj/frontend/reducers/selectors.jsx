function allTodos (state) {
    const allKeys = Object.keys(state.todos);
    return allKeys.map( key => {
        return state.todos[key];
    });
}

export default allTodos;
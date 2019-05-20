import { REMOVE_TODO, RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

function arrayToObj(arr){
    const newObj = {};

    arr.forEach((todo)=>{
        const id = todo.id;
        newObj[id] = todo;
    });

    return newObj;
}

function removeTodo(todos, todo){
    const newTodos = merge({}, todos);
    delete newTodos[todo.id];
    return newTodos;
}

export default (todos = {}, action)=>{
    Object.freeze(todos);
   
    switch(action.type) {
        case RECEIVE_TODOS:
            return arrayToObj(action.todos);
        case RECEIVE_TODO:
            const newtodos = merge({}, todos);
            newtodos[action.todo.id] = action.todo;
            return newtodos;
        case REMOVE_TODO:
            return removeTodo(todos, action.todo);
        default:
            return todos;
    }
};
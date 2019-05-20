import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, RECEIVE_TODOS, RECEIVE_TODO } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('App');
    ReactDOM.render(<Root store={configureStore} />, rootElement);
});


window.store = configureStore;
window.RECEIVE_TODOS = RECEIVE_TODOS;
window.RECEIVE_TODO = RECEIVE_TODO;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;
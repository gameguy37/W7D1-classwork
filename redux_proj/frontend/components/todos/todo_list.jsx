import React from 'react';
import TodoListItem from './todo_list_items';
import TodoForm from './todo_form';

class TodoList extends React.Component{
    constructor(props){
        super(props);

        this.removeEvent = this.removeEvent.bind(this);
    }

    removeEvent(event){
        event.preventDefault();
        const id = parseInt(event.currentTarget.getAttribute('data-id'));
        this.props.removeTodo( { id } );
    }

    render(){
        const todoList = this.props.todos.map( (todo, idx) => {
            return <TodoListItem 
                    key={idx} 
                    id={todo.id} 
                    title={todo.title}  
                    removeEvent={ this.removeEvent } />;
        });
        return (
            <>
            <h1>Todo List</h1>
            <ul>
                {todoList}
            </ul>
            <TodoForm receiveTodo={this.props.receiveTodo} />
            </>
        )
    }
}

export default TodoList;



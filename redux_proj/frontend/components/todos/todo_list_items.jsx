import React from 'react';

function TodoListItem( { id, title, removeEvent } ){
    //debugger
    return (
        <li onClick={removeEvent} data-id={ id } >{ title }</li>
    )
}


export default TodoListItem;
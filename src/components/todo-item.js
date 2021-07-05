import React from 'react'

export default function TodoItem({todo, deleteTodo}) {

    return (
        <div className = "my-2">
            <h5 className = "todo-title">{todo.title}</h5>
            <p className = "todo-desc">{todo.description} </p>
            <button className = "btn btn-danger sm" onClick = {() => deleteTodo(todo)}>Delete</button>
            <hr></hr>
        </div>
    )
}

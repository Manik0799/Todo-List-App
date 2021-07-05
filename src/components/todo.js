import React, {useState, useEffect} from 'react'
import TodoItem from './todo-item'
import AddTodo from './add-todo'

export default function Todo() {

    let initialTodos;

    if(localStorage.getItem('todos')===null)
        initialTodos = [];
    else
        initialTodos = JSON.parse(localStorage.getItem('todos'))

    const deleteTodo = (todoToDelete) => {
        setTodos(todos.filter((item) => {
            return item!== todoToDelete
        }))
    }
 
    const addTodo = (title, desc) => {
        
        let sno;

        if(todos.length === 0)
            sno = 1;
        else
           sno  = todos[todos.length-1].sno + 1;
        
        let todo = {
            sno : sno,
            title : title, 
            description : desc
        }

        setTodos([...todos, todo])


    }

    const [todos, setTodos] = useState(initialTodos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    


    return (
        <div className = "container">
            <AddTodo addTodo = {addTodo} />
            <div className = "text-center my-4">
             <h3 >Todo List App</h3>

            </div>
            { todos.length ? todos.map((todo) => {
                return <TodoItem todo = {todo} key = {todo.sno} deleteTodo = {deleteTodo} />
            }) : <h5>No Todos present</h5>}
        </div>
    )
}

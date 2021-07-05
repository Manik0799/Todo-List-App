import React, {useState} from 'react'

export default function AddTodo({addTodo}) {

    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")

    const submit = (e) => {
        e.preventDefault();

        if(!title || !description)
            alert("Title and description are mandatory")

        else
            addTodo(title, description)
            settitle("")
            setdescription("")
    }

    return (
        <div className = "my-3">
            <form onSubmit = {submit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" 
                id="title-todo" aria-describedby="emailHelp" 
                    value = {title}
                    onChange = {(e) => settitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Description</label>
                <input type="text" className="form-control" 
                    value = {description}
                    onChange = {(e) => setdescription(e.target.value)}
                />
            </div>
            
            <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}

import React from "react"

function TodoItem(props) {
    const completedStyle = {
        textDecoration:"line-through",
        color: "grey",
        fontStyle : "italic"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" 
             checked={props.todo.completed} 
             onChange={(event) => props.handleClick(props.todo.id)}/>
            <label style = {props.todo.completed ? completedStyle : null}>{props.todo.text}</label>
            <hr/>
        </div>
    )
}

export default TodoItem


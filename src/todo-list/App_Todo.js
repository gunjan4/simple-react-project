import React from "react"
import todoData from "./TodoData"
import TodoItem from "./TodoItem"


class App_Todo extends React.Component {
    
constructor(){
    super();
    this.state = {
        todos: todoData
    }
    this.handleClick = this.handleClick.bind(this)
}

handleClick(id){

    this.setState(prevState => {
        const updateTodo = prevState.todos.map( item =>  {
            if(item.id === id){
                return{ //return a new object
                    ...item,
                    completed : !item.completed
                }
            }
            return item
        })
        return{
            todos : updateTodo
        }
    })    
    console.log("Changed", id)
}

render(){

    const todoList = this.state.todos.map(item => <TodoItem key = {item.id} todo = {item}
    handleClick = {this.handleClick}/>)
    return(
            <div>
                <h1>TODO List</h1>
                {todoList}
            </div>
        )
}    

    

}
export default App_Todo
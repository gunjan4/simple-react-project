import React from "react"


class App_Login extends React.Component {
    constructor(){
        super()
        this.state = { 
            isLogged : true
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState( prevState =>{
            return {
                isLogged : !prevState.isLogged
            }
        })
    }

    render(){
        return(
            <div>
                {this.state.isLogged ? 
                <h1>You're logged in </h1> :
                <h1> You're logged out</h1>}  
                <button onClick = {this.clickHandler}>
                {this.state.isLogged ? 
                "log Out" :
                "log In"} 
                </button>              
            </div>
        )
    }   

}
export default App_Login
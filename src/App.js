import React, {useState} from "react"
import AppTodo from './todo-list/App_Todo'
import AppForm from './form/App_form'
import AppLogin from './login/App_Login'
import AppMeme from './meme-generator/App_meme'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"


function App(){
    const [count, setCount] = useState(0)
    function increment(){
        setCount(prevCount => prevCount+1)
    }
    
    function decrement(){
        setCount(prevCount => prevCount-1)
    }

    return(
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>                
                    </li>
                    <li>
                        <Link to="/login">Login</Link>                
                    </li>
                    <li>
                        <Link to="/todo">TODO</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                    <li>
                        <Link to="/meme">Meme Generator</Link>
                    </li>
                </ul> 
                <Switch>
                    <Route exact path="/login" component={AppLogin} />
                    <Route path="/todo" component={AppTodo} />
                    <Route path="/form" component={AppForm} />
                    <Route path="/meme" component={AppMeme} />
                    <Route path="/" render={() => 
                        <div>
                            <h1>Welcome!</h1>
                            <h2>{count}</h2>
                            <button onClick={increment}>Increment!</button>
                            <button onClick={decrement}>Decrement</button>
                        </div>} 
                    />
                </Switch>
            </Router>
        </div>  
    )
}

export default App
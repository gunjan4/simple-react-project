import React from "react"
import Header from "./Header"
import { render } from "react-dom"

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
        topText: "",
        bottomText: "",
        randomImage : "http://i.imgflip.com/1bij.jpg",
        memeImages : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })

    }

    handleSubmit(event){
        event.preventDefault()
        const randMemeImg = this.state.memeImages[Math.floor(Math.random() * this.state.memeImages.length)].url
        this.setState({randomImage : randMemeImg})
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response =>{
                const {memes} = response.data
                this.setState({
                    memeImages : memes
                })
            })
        
    }
    
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>                    
                    <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top text"
                        onChange={this.handleChange}/>

                    <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom text"
                        onChange={this.handleChange}/>
                
                    <button>Gen</button>
                </form>

                <div className="meme">
                    <h2 className="top">{this.state.topText}</h2>
                    <center><img src={this.state.randomImage} alt="" /></center>            
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
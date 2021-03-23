import React from "react"

function Header(){
    const mystyle = {
        height: "50%",
        marginLeft: "10%"
      }
    return(
        <header>
        <img style = {mystyle}
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
            />
            <p>Meme Generator</p>
        </header>
    )
    

}

export default Header
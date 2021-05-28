import React, { useRef } from 'react'
import "./Trivia.css"
function User({setUsername}) {
    const inputRef=useRef()
    const handleChange=()=>{
        inputRef.current.value && setUsername(inputRef.current.value)
    }
    return (
        <div className="start">
           <input type="text"className="startInput"placeholder="Enter Your Name"
           ref={inputRef}
           
           ></input>

           <button className="startbutton" onClick={handleChange}>Start Game</button>
        </div>
    )
}

export default User

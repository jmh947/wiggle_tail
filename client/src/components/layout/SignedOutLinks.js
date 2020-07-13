import React from "react"
import {NavLink} from "react-router-dom"
const SignedOutLinks = () => {
    return (
       <ul className="right">
           <li style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"30px"}}><NavLink to="/signup">Signup</NavLink></li>
           <li style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"30px"}}><NavLink to="/signin">Login</NavLink></li>
       </ul>
    )
}

export default SignedOutLinks
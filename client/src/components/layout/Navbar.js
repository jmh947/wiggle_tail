import React from "react"
import {Link} from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import image from "./logo.png"
import "./style.css"
const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
                      <a href="#Main" class="brand-logo"><p><img className = "logo" src={image} /></p></a>
            <div className="container">    
            <Link to="/" className="brand-logo">Wiggle Tails</Link>
            <SignedInLinks />
            <SignedOutLinks />
            </div>
        
        </nav>
    )
}

export default NavBar
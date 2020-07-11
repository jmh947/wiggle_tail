import React from "react"
import {Link} from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import {connect} from "react-redux"
import image from "./logo.png"
import "./style.css"
const NavBar = (props) => {
    const {auth,profile} = props
    // console.log(auth)
const links = auth.uid ?  <SignedInLinks profile={profile}/>: <SignedOutLinks/>

    return (
        <nav className="nav-wrapper grey darken-3">
                      <a href="#Main" class="brand-logo"><p><img className = "logo" src={image} /></p></a>
            <div className="container">    
            <Link to="/" className="brand-logo">Wiggle Tails</Link>
            
       {links}
            </div>
      
        </nav>
    )
}

const mapStateToProps =(state)=>{
   console.log(state)
return {
    auth: state.firebase.auth,
    profile:state.firebase.profile
}
}
export default connect(mapStateToProps)(NavBar)
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
        <nav className="nav-wrapper">
            <a href="/" className="brand-logo"><img className = "logo" src={image} /></a>
            
            
            <div className="container">   
             
            
                {/* <Link to="#name" className="brand-logo" style={{fontSize : "20px", fontFamily: "'Modak', cursive", color: "grey"}}>Welcome to Wiggle Tail</Link> */}
            
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
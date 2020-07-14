import React, { Profiler } from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {signOut} from "../../store/actions/authActions"
import "./style.css";

const SignedInLinks = (props) => {

    return (
       <ul className="right">
           <li style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"30px"}}><NavLink to="/createpost">Posting Board</NavLink></li>
           <li style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"30px"}}><NavLink to="/petfinder1">Adoption</NavLink></li>
           <li style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"30px"}}><NavLink to="/searchsitter">Pet Sitting</NavLink></li>
           <li style={{color: "orange", fontFamily: "'Leckerli One', cursive", fontSize:"30px"}}><a onClick={props.signOut}>Log Out</a></li>
           <li style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"30px"}}><NavLink to="/" className="btn btn-floating orange lighten-1">{props.profile.initials}</NavLink></li>
       </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
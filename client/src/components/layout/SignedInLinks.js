import React, { Profiler } from "react"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {signOut} from "../../store/actions/authActions"
import "./style.css";

const SignedInLinks = (props) => {

    return (
       <ul className="right">
           <li><NavLink to="/createpost">Posting Board</NavLink></li>
           <li><NavLink to="/petfinder1">Pet Finder</NavLink></li>
           <li><NavLink to="/searchsitter">Pet Sitting</NavLink></li>
           <li><a onClick={props.signOut}>Log Out</a></li>
    <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
       </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
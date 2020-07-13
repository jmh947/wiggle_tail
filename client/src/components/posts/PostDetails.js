

import React from 'react'
import {connect } from "react-redux"
import {firestoreConnect } from "react-redux-firebase"
import {compose } from "redux"
import { Redirect} from "react-router-dom"
import moment from "moment"
import "./style.css";

function PostDetails(props) {
   const {post,auth} = props;
   if (!auth.uid) return <Redirect to="/signin"/>
   if (post) {
       
       return(
            <div className="container section project-details">
                <div className="card z-depth-0">

                    <div className="card-content">
                         <div className="card-title">{post.title}</div>
                            <p>{post.content}</p>
                            <img src={post.imageUrl}
            alt="Uploaded images" height="300" width="400"/>
                    </div>

                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                        <div>{moment(post.createdAt.toDate()).calendar()}</div>   
                    </div>
                </div>
            </div>)
   } else {
    return (
       <div className="container center">Loading post...</div>
        )
   }
   
}
const mapStateToProps = (state, ownProps) =>{
    // console.log(state)
    const id = ownProps.match.params.id
    const posts = state.firestore.data.posts
    const post = posts ? posts[id]:null
    return {
        post:post,
        auth:state.firebase.auth
    }
}

export default compose(
connect(mapStateToProps), firestoreConnect([{collection:"posts"}])
)(PostDetails)

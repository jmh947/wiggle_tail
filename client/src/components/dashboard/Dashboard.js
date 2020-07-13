import React, { Component} from "react"
import Notifications from "./Notifications"
import PostList from "../posts/PostList"
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from "react-router-dom"
import "./style.css";
class Dashboard extends Component {
    render (){
        // console.log(this.props)
        const {posts, auth, notifications} = this.props
        if (!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="post col s12 m6">
                        <PostList posts={posts}/>
                    </div>

                    <div className="notification col s6 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    console.log (state)
    return {
        posts: state.firestore.ordered.posts,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'posts',orderBy:['createdAt','desc'] },
      {collection: 'notifications', limit:7, orderBy:['time','desc']}
    ])
  )(Dashboard)
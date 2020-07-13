import React, { Component } from 'react'
import { connect } from "react-redux"
import { createPost} from "../../store/actions/postActions"
import { Redirect} from "react-router-dom"
 class CreatePost extends Component {
     state = {
title:"",
content:""
     }

handleChange = (e)=>{
    // console.log(e)
    this.setState({
       [e.target.id]:e.target.value
    })
}
handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(this.state)
    this.props.createPost(this.state)
    this.props.history.push('/')
}


    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className=" text-darken-1" style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"50px"}}>Create a New Post</h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="content">Post Content</label>
                            <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
                        </div>
                        <div className="input-field">
                            <button className="btn orange lighten-1 z-depth-0">Create</button>
                        </div>
                    
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        createPost: (post)=> dispatch(createPost(post))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreatePost)

import React, { Component } from 'react'
import { connect } from "react-redux"
import { createPost} from "../../store/actions/postActions"
import { Redirect} from "react-router-dom"
import {storage} from '../../config/fbConfig'
import "./style.css"
 class CreatePost extends Component {
//      state = {
// title:"",
// content:""
//      }
constructor (props) {
    super(props);
    this.state= {
        title:"",
content:"",
            image: null,
            url:'', 
            progress:0
    }
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
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



  
    handleImageChange = e => {
        if(e.target.files[0]){
            const image = e.target.files[0]
                this.setState(()=> ({image}))
        }
    }
    handleUpload =  ()=>{
        const {image} = this.state
            const uploadTask =  storage.ref(`images/${image.name}`).put(image)
            uploadTask.on('state_changed', (snapshot)=>{
//progress function
const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
this.setState({progress})
            },
            (error)=>{
                //error function
                console.log(error)
            },
            ()=>{
//complete function
storage.ref('images').child(image.name).getDownloadURL().then(url=>{
    console.log(url)
    this.setState({url})
})
            })
    }
    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to="/signin"/>
        const style = {
            // height: '100vh'
            // display:  'flex'
            // flexdirection: 'column'
            // alignItems: 'center',
            // justifyContent: 'center'
        }
        return (
            <div className="container">
             
                <form className="white-mod" onSubmit={this.handleSubmit}>
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
                <form className="white-mod" style={style}>     <h5 className=" text-darken-1" style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"17px"}}>Add an image</h5>
            <progress value={this.state.progress} max="100"/>
            <br/>
            <input type="file" onChange={this.handleImageChange} id="imageUpload"/>
            <button onClick={this.handleUpload}>Upload</button>
            <br/>
         
             <img src={this.state.url || "https://colpas.mouau.edu.ng/sites/colpas.mouau.edu.ng/files/default_images/placeholder1.png"} 
            alt="Uploaded images" height="300" width="400"/> </form>
                        
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

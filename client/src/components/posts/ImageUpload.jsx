
import React, { Component } from 'react'
import {storage} from '../../config/fbConfig'

export class ImageUpload extends Component {

    constructor (props) {
        super(props);
        this.state= {
                image: null,
                url:'', 
                progress:0
        }
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
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

        const style = {
            height: '100vh',
            display:  'flex',
            flexdirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
        return (
            <div style={style}>
            <progress value={this.state.progress} max="100"/>
            <br/>
            <input type="file" onChange={this.handleImageChange} id="imageUpload"/>
            <button className="btn orange lighten-1 z-depth-0" onClick={this.handleUpload}>Upload</button>
            <br/>
         
             <img src={this.state.url || "https://colpas.mouau.edu.ng/sites/colpas.mouau.edu.ng/files/default_images/placeholder1.png"} 
            alt="Uploaded images" height="300" width="400"/>
   
        </div>
        )
    }
}

export default ImageUpload

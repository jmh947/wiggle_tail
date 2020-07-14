import React, { Component } from 'react'
 import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from "react-router-dom"
import Animals from "../Result"


 class petFinder1 extends Component {
 
     state = {
         animals:[],
         type:"",
         gender:"",
         size:"",
         spayed:""
     }

handleChange = (e)=>{
    // console.log(e)
    this.setState({
       [e.target.id]:e.target.value
    })
}

handleSubmit = (e)=>{ console.log(this.state, "state")
console.log(this.state, "state")
e.preventDefault();
API.getPetFinder(

  {
    
    type: this.state.type, 
    gender: this.state.gender, 
    status: "adoptable", 
    size: this.state.size, 
    attributes: {spayed_neutered: true}

  }
  )

  .then(res => 
      // console.log(res.animals, "res animal")
      this.setState({animals:res.animals,
        type:"",
        gender:"",
        size:"",
        spayed:""
    })
    )
    .catch(err => console.log(err));
}


    render() {
      const { auth} = this.props
          if (!auth.uid) return <Redirect to="/signin"/>
        return (
          
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className=" text-darken-3" style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"50px"}}><b>Pet Finder</b></h5>


                     
                        <div className="input-field">
                            <label htmlFor="type">Type</label>
                            <input type="text" id="type" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="gender">Gender</label>
                            <input type="text" id="gender" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="size">size</label>
                            <input type="text" id="size" onChange={this.handleChange}/>
                        </div>
                 
                        <div className="input-field">
                        <p>
      <label>
        <input type="checkbox" id="spayed" onChange={this.handleChange} />
        <span>Already Spayed/Neutered?</span>
      </label>
    </p>
                           
                        </div>
                        <div className="input-field">
                            <button className="btn orange lighten-1 z-depth-0">Find your pet!</button>
                        </div>
                    
                </form>
                <div className="card-content grey-text text-darken-3">
          {this.state.animals.length>0 ? this.state.animals.map(animal=>{
            return (
                <Animals animal={animal} />
            )
          }):"search not found"}
  
        </div>
            </div>
      
        )
    }
}

const mapStateToProps =(state)=>{
  console.log (state)
  return {
     
      auth: state.firebase.auth
    
  }
}

export default compose(
  connect(mapStateToProps)
)(petFinder1)

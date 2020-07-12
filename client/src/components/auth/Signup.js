import React, { Component } from 'react'
import { Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {signUp} from "../../store/actions/authActions"
import API from "../../utils/API"
 class SignUp extends Component {
     state = {
email:"",
password:"",
firstName:"",
lastName:"",
zipcode:"",
hasPet:"",
petName:"",
petBreed:"",
petAge:"",
petColor:""
     }

handleChange = (e)=>{
    // console.log(e)
    this.setState({
       [e.target.id]:e.target.value
    })
}
handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state, "user")
    this.props.signUp(this.state)
  
    const pet ={
        petName:this.state.petName,
        petBreed:this.state.petBreed,
petAge:this.state.petAge,
petColor:this.state.petColor
    }
    API.addPet(pet).then(results=>{

  const owner = {
        firstName:this.state.firstName,
lastName:this.state.lastName,
userZipcode:this.state.zipcode,
hasPet:this.state.hasPet==="on" ? true:false,
pet:results._id
    }
console.log(results, "pet is added");
API.addOwnerInfo (owner).then(results=>{
    console.log(results);
  
})
    })





}


    render() {
        const {auth,authError} = this.props
        if (auth.uid) return <Redirect to="/"/>
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="zipcode">Zipcode</label>
                            <input type="text" id="zipcode" onChange={this.handleChange}/>
                        </div>
                    
                        <div className="input-field">
                        <p>
      <label>
        <input type="checkbox" id="hasPet" onChange={this.handleChange} />
        <span>Has Pet?</span>
      </label>
    </p>
                           
                        </div>
                        <div className="input-field">
                            <label htmlFor="petName">Pet Name</label>
                            <input type="text" id="petName" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="petAge">Pet Age</label>
                            <input type="text" id="petAge" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="petColor">Pet Color</label>
                            <input type="text" id="petColor" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="petBreed">Pet Breed</label>
                            <input type="text" id="petBreed" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                            <div className="red-text center">
        { authError ? <p>{authError}</p> : null}
                            </div>
                        </div>
                    
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
       
         auth:state.firebase.auth,
         authError: state.auth.authError
    }
   
}

const mapDispatchToProps= (dispatch) =>{
    return {
        signUp: (newUser)=> dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

import React, { Component } from 'react'

 class petFinder1 extends Component {
     state = {
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
handleSubmit = (e)=>{ console.log(this.state)
    e.preventDefault();
   
}


    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Pet Finder</h5>


                     
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
                            <button className="btn pink lighten-1 z-depth-0">Find your pet!</button>
                        </div>
                    
                </form>
                
            </div>
        )
    }
}

export default petFinder1;

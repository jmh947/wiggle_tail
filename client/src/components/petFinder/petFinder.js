import React, { Component } from 'react'
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
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
handleSubmit = (e)=>{ console.log(this.state)
    e.preventDefault();
    API.getPetFinder({
        
        type: this.state.type, 
        gender: this.state.gender, 
        status: "adoptable", 
        size: this.state.size, 
        attributes: {spayed_neutered: true}
    
      })
        .then(res => this.setState({animals:res.data,
            type:"",
   gender:"",
   size:"",
   spayed:""
        }))
        .catch(err => console.log(err));
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
                <List>
                {this.state.animals.map(pet => (
                  <ListItem key={pet.id}>
                    {/* <Link to={"/books/" + book._id}> */}
                      <strong>
                        {pet.description}
                      </strong>
                    {/* </Link> */}
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            </div>
      
        )
    }
}

export default petFinder1;

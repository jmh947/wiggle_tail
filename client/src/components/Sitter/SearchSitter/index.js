import React, {Component} from "react";
import API from '../../../utils/API';
// import SitterForm from "../SitterForm"
import "./style.css";
import Sitters from '../SitterResult'

class SearchSitter extends Component {
    
    
       state= {
            sitters:[],
            sitterZipCode : ""
        }
    handleInputChange = (e)=> {
        console.log(e)
        const {name, value} = e.target
        this.setState({
            [name]: value  
       })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

         const zipcode = ( {zipcode:this.state.sitterZipCode})
        console.log(zipcode);

        API.getAllPetSitter().then(res => 
             console.log (res)
            //  this.setState({sitters:res.sitters,
            //     sitterZipCode : ""
            // })
            ) .catch(err => console.log(err));
     
    }  

   
    

    render () {
        return(
                    <div className = "container">
                        <form>
                            <div className = "form-group">
                            {/* <form> */}
                                <label htmlFor = "search">
                                    <h2 className="title" style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"50px"}}><b>Find a Pet Sitter Near You</b></h2>
                                </label>
            
                                <input 
                                    onChange = {this.handleInputChange}  //changed from handleInputChange
                                    value = {this.state.zipcode}
                                    name = "sitterZipCode"
                                    type = "number"
                                    className = "form-control"
                                    placeholder = "Enter Your Zipcode"
                                    id = "searchZipcode"
                                />
            
                                <button
                                    onClick = {this.handleFormSubmit}
                                    className = "search btn orange lighten-1 z-depth-0"
                                > 
                                Search Your Area
                                </button>
                                <br/>
            
                                
                                <a href ="/sittersignup">
                                    <p
                                    //onClick = {props.handleFormSubmit}
                                    className = "sitter-signup btn orange lighten-1 z-depth-0"
                                    > 
                                    Sign Up To Be A Pet Sitter
                                    </p>
                                </a>
            
                                {/* </form> */}
            
            
                            </div>
                        </form>
                        <div className="card-content grey-text text-darken-3">
          {this.state.sitters.length>0 ? this.state.sitters.map(sitter=>{
            return (
                <Sitters sitter={sitter} />
            )
          }):"search not found"}
  
        </div>
                    </div>
                )
    }

}

// function SearchSitter (props){
//     // state = {
//     //     zipcode: "85297"
//     // }

//     // handleInputChange = (e)=> {
//     //     console.log(e)
//     //     this.setState({
//     //         [e.target.id]:e.target.value
//     //     })
//     // }

//     return(
//         <div className = "container">
//             <form>
//                 <div className = "form-group">
//                 {/* <form> */}
//                     <label htmlFor = "search">
//                         <h2 className="title" style={{color: "black", fontFamily: "'Leckerli One', cursive", fontSize:"50px"}}><b>Find a Pet Sitter Near You</b></h2>
//                     </label>

//                     <input 
//                         onChange = {props.handleInputChange}  //changed from handleInputChange
//                         value = {props.search}
//                         name = "search"
//                         type = "number"
//                         className = "form-control"
//                         placeholder = "Enter Your Zipcode"
//                         id = "searchZipcode"
//                     />

//                     <button
//                         onClick = {props.handleFormSubmit}
//                         className = "search btn orange lighten-1 z-depth-0"
//                     > 
//                     Search Your Area
//                     </button>
//                     <br/>

                    
//                     <a href ="/sittersignup">
//                         <p
//                         //onClick = {props.handleFormSubmit}
//                         className = "sitter-signup btn orange lighten-1 z-depth-0"
//                         > 
//                         Sign Up To Be A Pet Sitter
//                         </p>
//                     </a>

//                     {/* </form> */}


//                 </div>
//             </form>
//         </div>
//     )
// }



export default SearchSitter;
  
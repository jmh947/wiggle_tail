import React, { Component } from "react";
import { petSitter } from "../../../pages/petSitter";
import "./style.css"
//import Sitter from "../../../../../models/sitter";

// import API from "../../../utils/API";

// class SitterResult extends Component {

function SitterResult (props) {
//     //Initialize State
//     constructor(props){
//     super(props)
//     this.state ={
//         petSitter : []
        
//     }
// }

    // // Render the data from the API request
    // componentDidMount () {
    //     API.getAllPetSitter()
    //     .then(sitterInfo => this.setState({ petSitter: sitterInfo})
    //     )
    //     .catch(err => console.log(err))
    // }

    // matchedPetSitters () => {
    //     API.getZipcode()
    //     .then(zipcode => this.setState({ zipcode : sitterInfo})
    //     )
    //     .catch(err => console.log(err))
    // }
    // }

        return(
            <div>
                 <p>Sitter Name: Will Farrel</p>
                 <p>Rate Per Hour: $100</p>
                 <p>Email: WF@yahoo.com</p>
                 <p>Phone Number: 8888888888</p>
                 <p>Rate Per Hour: $100</p>
                 <p>Description: I will make your pets laugh</p>
                 <p>Will do boarding and daycare </p>
                 <p> Insert image of Mugatu with his poodle </p>
            </div>
        )
}

export default SitterResult;


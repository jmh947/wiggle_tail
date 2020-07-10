import React, { Component } from "react";
import API from "../../utils/API";

class SitterResult extends Component {

    //Initialize State
    state ={
        petSitter : [],
        petSitter : ""
    }

    //When we start the web browser, update the state of the petSitter array
    componentDidMount () {
        API.getPetSitterInfo()
        .then(sitterInfo => this.setState({ petSitter: sitterInfo}))
        
        .catch(err => console.log(err))
    }

    handleZipcode = (zipcode) => {
        const     
    }
}



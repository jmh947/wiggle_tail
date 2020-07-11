import React, { Component } from "react";
import API from "../utils/API";
import SearchSitter from "../components/Sitter/SearchSitter";
import SitterResult from "../components/Sitter/SitterResult";

class petSitter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            values : "",
            matchedPetSitters : []
        }

        // this.searchPetSitter = this.searchPetSitter.bind(this);
    }

    componentDidMount () {
        API.getAllPetSitter()
        .then(sitterInfo => this.setState({ matchedPetSitters : sitterInfo})
        )
        .catch(err => console.log(err))
    }

    // seachPetSitter = () => { // Need to apply filter to find the sitters with matching zipcode
    //     API.getAllPetSitter()
    //     .then(sitterInfo => this.setState({ matchedPetSitters : sitterInfo})
    //     )
    //     .catch(err => console.log(err))
    // }

    // Handle Input
    handleInputChange = e => {
        // Getting the value and name of the input which triggered the change
        const name = e.target.name;
        const value = e.target.value;
        // Updating the input's state
        this.setState( {
            [name] : value
        })
    }

    handleFormSubmit = e => {

         // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        this.searchPetSitter(this.state.search) // "search" is found as name in the sitterform.js
    }

    render () {

        return (
            <div>
                <SearchSitter
                    search = {this.state.search}
                    handleInputChange = {this.handleInputChange}
                    handleFormSubmit = {this.handleFormSubmit} />

                <div className = "container">
                    <h2><b>Result</b></h2>
                    <SitterResult 
                        matchedPetSitters = {this.matchedPetSitters} 
                    />
                </div>
            </div>
        )
    }

}
export default petSitter;




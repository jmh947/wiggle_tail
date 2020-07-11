import React from "react";

function SearchSitter (props){

    return(
        <div className = "container">
            <form>
                <div className = "form-group">

                    <label htmlFor = "search">
                        <h2>Find You Pets a New Best Friend Through Our Trusted Pet Sitter Finder</h2>
                    </label>

                    <input 
                        onChange = {props.handleInputChange}
                        value = {props.search}
                        name = "search"
                        type = "text"
                        className = "form-control"
                        placeholder = "Enter Your Zipcode"
                        id = "searchZipcode"
                    />

                    <button
                        onClick = {props.handleFormSubmit}
                        className = "btn btn-dark mt-3 mb-5"
                    > 
                    Search Your Area
                    </button>


                </div>
            </form>
        </div>
    )
}

export default SearchSitter;
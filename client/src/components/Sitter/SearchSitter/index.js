import React from "react";
import SitterForm from "../SitterForm"
import "./style.css";


function SearchSitter (props){

    return(
        <div className = "container">
            <form>
                <div className = "form-group">
                {/* <form> */}
                    <label htmlFor = "search">
                        <h2><b>Find You Pets a New Best Friend Through Our Trusted Pet Sitter Finder</b></h2>
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

                    
                    <a href ="/sittersignup">
                        <p
                        // onClick = {props.handleFormSubmit}
                        className = "sitter-signup btn btn-dark mt-3 mb-5"
                        > 
                        Sign Up To Be A Pet Sitter
                        </p>
                    </a>

                    {/* </form> */}


                </div>
            </form>
        </div>
    )
}

export default SearchSitter;
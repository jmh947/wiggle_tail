import React, { Component } from "react";
import API from "../../utils/API";

class SitterResult extends Component {

    //Initialize State
    state ={
        petSitter : []
        
    }

    // Render the data from the API request
    componentDidMount () {
        API.getPetSitterInfo()
        .then(sitterInfo => this.setState({ petSitter: sitterInfo})
        )
        .catch(err => console.log(err))
    }

    render () {
        return(
            <div>
                <div>
                    {this.props.sitters.map(result => (
                       <div className="card mb-3" key={result._id}>
                           <div className = "row">

                                {/* Sitter Image Section*/}
                                <div className="col-md-2">
                                    <img className="img-fluid" src={result.userPhoto} />
                                </div>

                                {/* Sitter Info Section */}
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5>{result.firstName}</h5>
                                        <h5>{result.lastName}</h5>
                                        <h5>{result.sitterZipcode}</h5>
                                        <h5>{result.email}</h5>
                                        <h5>{result.phoneNumber}</h5>
                                        <h5>{result.wage}</h5>
                                        <h5>{result.description}</h5>
                                    </div>
                                </div>

                            </div>
                       </div>

                    ))}
                </div>
            </div>
        )
    }
}



import React, { Component } from 'react'
import API from "../../../utils/API";
export class Sitters extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
           

            <div className="card mb-3" key={this.props.sitter.sitterZipCode}>
                <div className="row">

                    <div class="col s6">  
                       

                    <div class="col s6">
                        <div className="card-body">
                            <h5 className="card-title"> {this.props.sitter.firstName}</h5>
                            <p className="card-text"> {this.props.sitter.lastName}</p>

                           
                        </div>
                    </div>
                </div>
            </div>

</div>
        )
    }
}

export default Sitters

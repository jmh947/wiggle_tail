import React, { Component } from "react";
import API from "../../utils/API";

class Animals extends Component {
    constructor(props) {
super(props)
    }


    render() {

        return (

            <div className="card mb-3" key={this.props.animal.id}>
                <div className="row">
                <div class="col s6">  <img atl={this.props.animal.name} className="img-fluid" style={{width: 300, height:300}} src={ this.props.animal.primary_photo_cropped ?
                          this.props.animal.primary_photo_cropped.small :  "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6"} /></div>
     
                   

      <div class="col s6">
                        <div className="card-body">
                            <h5 className="card-title"> {this.props.animal.contact.address? this.props.animal.contact.address.city:"no city found"} -  {this.props.animal.contact ? this.props.animal.contact.address.state : "no state found"}</h5>
                            <p className="card-text"> {this.props.animal.description}</p>

                            <div>
                                <a href={this.props.animal.url} className="btn badge-pill btn-outline-dark mt-3" >View</a>

                                {/* <button 
                                                    className="btn badge-pill btn-outline-warning mt-3 ml-3" 
                                                    onClick={ () => this.handleSave(this.props.animal) }
                                                >
                                                    {this.state.savedthis.props.animals.map(
                                                        book => book._id
                                                    ).includes(this.props.animal._id) ? "Unsave" : "Save"
                                                    }

                                               
                                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Animals;
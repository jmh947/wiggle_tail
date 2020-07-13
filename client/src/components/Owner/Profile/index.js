import React, { Component } from "react";
import API from "../../../utils/API";


class ownerProfile extends Component {

    state = {
        ownerInfo : ""
    }

   componentDidMount () {
       API.getOwnerInfo(this.props.match._id)
       .then(res => this.setState({ownerInfo: res.data}))
       .catch(err => console.log(err));

    }

    render () {

        return (
            <div>
                

                <div>
                    <h1>Hello World</h1>
                </div>
                
                
            
                
                
            </div>

        )
    }
  
}

export default ownerProfile; 
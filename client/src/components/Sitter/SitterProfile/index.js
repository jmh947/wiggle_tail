import React, { Component } from "react";
import API from "../../../utils/API";
import NavBar from "../../layout/Navbar"
import Footer from "../../Footer"

class SitterProfile extends Component {

    state = {
        sitterInfo : ""
    }

   componentDidMount () {
       API.getAPetSitterInfo(this.props.match._id)
       .then(res => this.setState({sitterInfo: res.data}))
       .catch(err => console.log(err));

    }

    render () {

        return (
            <div>
                <NavBar />
                <h3>
                    {this.state.sitterInfo}
                </h3>
                <Footer />
            </div>

        )
    }
  
}

export default SitterProfile;
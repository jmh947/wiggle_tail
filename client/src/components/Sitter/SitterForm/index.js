import React from "react";

function SitterForm (props) {

    return(

        <div className = "container">
            <form>
                {/* First name */}
                <input 
                    name = "name"
                    type = "text"
                    className = "form-control"
                    placeholder = "First Name"
                    id = "firstname"
                    /> 

                    {/* Last name */}
                <input 
                    name = "name"
                    type = "text"
                    className = "form-control"
                    placeholder = "Last Name"
                    id = "lastname"
                    />
                {/* Email */}
                <input 
                    name = "email"
                    type = "text"
                    className = "form-control"
                    placeholder = "Email"
                    id = "email"
                    />

                {/* Zipcode */}
                <input 
                    name = "number"
                    type = "text"
                    className = "form-control"
                    placeholder = "Zipcode"
                    id = "zipcode"
                />

                {/* Phone*/}
                <input 
                    name = "phone"
                    type = "text"
                    className = "form-control"
                    placeholder = "Cell number"
                    id = "cellphone"
                    /> 

                {/* Service Charge*/}
                <input 
                    name = "charge"
                    type = "text"
                    className = "form-control"
                    placeholder = "Doller per hour"
                    id = "charge"
                    />
                {/* Tell us about you */}
                <input 
                    name = "aboutyou"
                    type = "text"
                    className = "form-control"
                    placeholder = "Tell us about you"
                    id = "aboutyou"
                    />
                
                {/* Options */}
                {/* Boarding */}
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                     Boarding
                    </label>
                </div> 

                {/* Stay at home */}
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                     Stay at Home
                    </label>
                </div>

                {/* Walks */}
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                     Walks
                    </label>
                </div>

                {/* Daycare */}
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                    Daycare
                    </label>
                </div>

                {/* Submit Btn */}
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div>
    )

}

export default SitterForm;
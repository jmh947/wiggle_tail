const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sitterProfile = new Schema ({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    sitterZipCode:{type: Number, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    wage: {type: Number, required: true},
    description: {type: String, required: true},
    Boarding: {type: Boolean, default:false, required: false},
    Stay_at_home: {type: Boolean, default:false, required: false},
    Walks: {type: Boolean, default:false, required: false},
    Daycare: {type: Boolean, default:false, required: false},

    userPhoto : [{ // One user can have many photo
        type: Schema.Types.ObjectId, //foreign key from Pet model
        ref: "userPhoto" 
    }]

})

let Sitter = mongoose.model("Sitter", sitterProfile);

module.exports = Sitter; 
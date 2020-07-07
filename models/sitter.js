const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sitterProfile = new Schema ({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    sitterZipcode:{type: Number, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    wage: {type: Number, required: true},
    description: {type: String, required: true}

})

let Sitter = mongoose.model("Sitter", sitterProfile);

module.exports = Sitter; 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petProfile = new Schema ({
    petName:{type: String, required: true},
    petBreed: {type: String, required: false},
    petAge: {type: Number, required: false},
    petColor: {type: String, required: false},

    //petPhoto: {type: String, required: false}


})

var Pet = mongoose.model("Pet", petProfile);

module.exports = Pet; 
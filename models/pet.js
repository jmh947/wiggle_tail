const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petProfile = new Schema ({
    petName:{type: String, required: true},
    petBreed: {type: String, required: true},
    petAge: {type: Number, required: true},
    petColor: {type: String, required: false},

    //petPhoto: {type: String, required: false}


    petOwner : { // One pet can have many photo
        type: Schema.Types.ObjectId, //foreign key from Pet model
        ref: "Owner" //Need to check the Pet model later
    }

})

let Pet = mongoose.model("Pet", petProfile);

module.exports = Pet; 
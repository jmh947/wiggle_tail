const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerProfile = new Schema ({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    userZipcode:{type: Number, required: true},
    hasPet: {type: Boolean, required: true},

    Pet : [{ // One pet can have many photo
        type: Schema.Types.ObjectId, //foreign key from Pet model
        ref: "Pet" //Need to check the Pet model later
    }]

})

let Owner = mongoose.model("Owner", ownerProfile);

module.exports = Owner; 
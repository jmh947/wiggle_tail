const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petPhoto = new Schema ({

    URL: {type: String, required: true},
    // Pet_id: {type: Number, required: true}

    Pet : [{ // One pet can have many photo
        type: Schema.Types.ObjectId, //foreign key from Pet model
        ref: "Pet" //Need to check the Pet model later
    }]
})

//Assign name and structure to the Photo collection
let petPhoto = mongoose.model("petPhoto", petPhoto); 

module.exports = petPhoto;
 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userPhoto = new Schema ({

    URL: {type: String, required: true},
    // Pet_id: {type: Number, required: true}

})

//Assign name and structure to the Photo collection
let userPhoto = mongoose.model("userPhoto", userPhoto); 

module.exports = userPhoto;
 
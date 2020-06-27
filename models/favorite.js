const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favPhoto = new Schema ({
    Description :{type: String, required: false},
    URL: {type: String, required: true},

    User : [{ //one user can have many favorite
        type: Schema.Types.ObjectId,
        ref: "User" //Need to check the User model later
    }]
})

let Favorite = mongoose.model("Favorite", favPhoto);

module.exports = Favorite; 
import axios from "axios";

export default {

    // User's input information
    signUp : function(userInfo) {
        return axios.post("/api/ownerprofile", userInfo).then(result => result.data);
    },

    //User login
    LogIn: function(id) {
        return axios.get("/api/ownerprofile" + id)
        .then(result => result.data);
    },

    // User add Pet
    addPet: function(petInfo) {
        return axios.post("/api/petprofile", petInfo).then(result => result.data);
    },

    // Retrieve Pet info and render it on user profile page
    getAllPet : function() {
        return axios.get("/api/petprofile").then(result => result.data);
    },

    // Delete a Pet
    deleteAPet: function(id) {
        return axios.delete("/api/petprofile" + id).then(result => result.data);

    }



}
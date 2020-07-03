import axios from "axios";

export default {

    // User's input information
    addOwnerInfo : function(userInfo) {
        return axios.post("/api/ownerprofile", userInfo).then(result => result.data);
    },

    //User login
    getOwnerInfo: function(id) {
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
    deletePet: function(id) {
        return axios.delete("/api/petprofile" + id).then(result => result.data);

    },

    // Add a pet sitter
    addPetSitterInfo : function(sitterInfo) {
        return axios.post("/api/petsitterprofile", sitterInfo).then(result => result.data);
    },

    // Get a pet sitter
    getPetSitterInfo : function (id) {
        return axios.get("/api/petsitterprofile" + id ).then(result => result.data);
    },

    //Remove a pet sitter
    removePetSitter : function(id) {
        return axios.delete("/api/petsitterprofile" + id).then(result => result.data);
    }



}
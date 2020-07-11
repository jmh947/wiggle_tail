import axios from "axios";

let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4U2NJd0ZpaEdGdmYzamFxNFUzc1NEaUpVV1pGb25Jd3RhNFNsbDJ3TDVwMnRXaHlIZiIsImp0aSI6ImEwYWIxZDg1YWYwYTBjYjIyMWZiNjM5ZDQwNjI4ZGI4NzViOTNhOGEzOTMxNTFhYmE1M2UzYzBlZTY3YzlhNTkwM2M3NTUxYmI1OWM0NGIyIiwiaWF0IjoxNTk0MDkyOTA3LCJuYmYiOjE1OTQwOTI5MDcsImV4cCI6MTU5NDA5NjUwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.id2___h_I5PEWXar_xFUtepkfeOZfzyEDgrjURHD6E0Xq5-N70sl08SgHd0IZfh2rPCZaTiEOIUCUDDrFySZOYMZYumHCYBUEgs1pMK3HevKQKtnPPQOXXhSpgc7Tv7Qk_6-z2dGYxHaFl6y4BPdlf-pG5LYg1KCEhvKLEFsgYonbe1cRA6kCgVOXUdPI895dQwIXDRRJWv4XgF2s4o0oVT8PUaDltFMpxwm6UMTwYXIRHhJllJsx3bKA1L8hPmaN9PweSA83QKn3mR_Srzt3yZr5CMs9kW6o33ToCy3w0OtkJ7xnG8mQH4-sM2bS-Y4O0dw7DntRxZC1rqlLLMC_Q"

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

    //get all pet sitter
    getAllPetSitter : function(sitterInfo) {
        return axios.get("/api/petsitterprofile")
        // .then(result => result.data);

        console.log("getting pet sitter")
    },

    // Get a pet sitter
    getAPetSitterInfo : function (id) {
        return axios.get("/api/petsitterprofile/" + id ).then(result => result.data);
    },

    //Remove a pet sitter
    removePetSitter : function(id) {
        return axios.delete("/api/petsitterprofile/" + id).then(result => result.data);
    },

   //fetch pet finder api info
   getPetFinder : function(id) {
    return axios.get("/api/petfinder").then(result => result.data);
}


}
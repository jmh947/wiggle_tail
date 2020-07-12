const db = require ("../models")
const petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({apiKey: "8ScIwFihGFvf3jaq4U3sSDiJUWZFonIwta4Sll2wL5p2tWhyHf", secret: "AtVyXheRFEYIcY63ghZcCQhDb7JmfJEQYvP1gLGq"});

module.exports = {

    // Get all pet info
    findAll: function(req,res) {
        console.log("Pet Finder");
        client.animal.search({
            type: "Dog", 
            gender: "Male", 
            status: "adoptable", 
            size: "Small", 
            attributes: {spayed_neutered: true}})
            
        .then(function (response) {
            res.json(response.data)
            // Do something with `response.data.animals`
        })
        .catch(function (error) {
            // Handle the error
        });
    }

    

}





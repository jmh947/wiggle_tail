const db = require ("../models")

module.exports = {
    
    // Pet input
    create : function(req, res) {
        console.log(req.body)
        db.Pet
        .create(req.body)
        .then(dbOwner => res.json(dbOwner))
    },

    // Get a pet info
    findById: function(req,res) {
        db.Pet
        .findById(req.params.id)
        .then(dbOwner => res.json(dbOwner))
        .catch(err => status(422).json(err))
    },

    // Get all pet info
    findAll: function(req,res) {
        db.Pet
        .find()
        .then(dbOwner => res.json(dbOwner))
        .catch(err => status(422).json(err))
    },

     // Remove a pet
     remove: function(req,res) {
        db.Pet
        .remove({_id: req.params.id})
        .then(dbOwner => res.json(dbOwner))
        .catch(err => status(422).json(err))
    },

    // Update a pet
    update: function(req,res) {
        db.Pet
       .update({_id: req.params.id})
       .then(dbOwner => res.json(dbOwner))
       .catch(err => status(422).json(err))
   }

}





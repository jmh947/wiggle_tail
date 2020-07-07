const db = require ("../models")

module.exports = {
    
   // User Input
   create : function(req, res) {
    console.log(req.body)
    db.petSitter
    .create(req.body)
    .then(dbOwner => res.json(dbOwner))
},

// Get all user info
findById: function(req,res) {
    db.petSitter
    .findById(req.params.id)
    .then(dbOwner => res.json(dbOwner))
    .catch(err => status(422).json(err))
},

// Get all user info
findAll: function(req,res) {
    db.petSitter
    .find()
    .then(dbOwner => res.json(dbOwner))
    .catch(err => status(422).json(err))
},

 // Get all user info
 remove: function(req,res) {
    db.petSitter
    .remove({_id: req.params.id})
    .then(dbOwner => res.json(dbOwner))
    .catch(err => status(422).json(err))
},

// Get all user info
update: function(req,res) {
    db.petSitter
   .update({_id: req.params.id})
   .then(dbOwner => res.json(dbOwner))
   .catch(err => status(422).json(err))
}

}

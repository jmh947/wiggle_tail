const db = require ("../models")

module.exports = {
    
// Pet sitter Input
   create : function(req, res) {
    console.log(req.body)
    db.Sitter
    .create(req.body)
    .then(dbSitter => res.json(dbSitter))
},

// Get a sitter info
findById: function(req,res) {
    db.Sitter
    .findById(req.params.id)
    .then(dbSitter => res.json(dbSitter))
    .catch(err => status(422).json(err))
},

findByZipcode : function(req,res) {
    db.Sitter
    .find({sitterZipCode : req.params.zipcode})
    .then(dbSitter => res.json(dbSitter))
    .catch(err => status(422).json(err))
},

// Get all pet sitter info
findAll: function(req,res) {
    db.Sitter
    .find()
    .then(dbSitter => res.json(dbSitter))
    .catch(err => status(422).json(err))
},

 // Remove a pet sitter
 remove: function(req,res) {
    db.Sitter
    .remove({_id: req.params.id})
    .then(dbSitter => res.json(dbSitter))
    .catch(err => status(422).json(err))
},

// update a pet sitter
update: function(req,res) {
    db.Sitter
   .update({_id: req.params.id})
   .then(dbSitter => res.json(dbSitter))
   .catch(err => status(422).json(err))
}

}

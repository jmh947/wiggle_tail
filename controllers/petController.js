const db = require ("../models")

module.exports = {
    
    // Pet Input
    create : function(req, res) {
        console.log(req.body)
        db.Pet
        .create(req.body)
        .then(dbOwner => res.json(dbOwner))
    },

    // Get all user's pet info
    findById: function(req,res) {
        db.Pet
        .findById(req.params.id)
        .then(dbOwner => res.json(dbOwner))
        .catch(err => status(422).json(err))
    },

    // Remove a pet
    remove: function (req,res){
        db.Pet
        .findById( {_id: req.params.id} )
        .then( deletedPet => deletedPet.remove() )
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.status(422).json(err))
    }

}





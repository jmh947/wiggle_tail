const db = require ("../models")

module.exports = {
    
    // User Input
    create : function(req, res) {
        console.log(req.body)
        db.Owner
        .create(req.body)
        .then(dbOwner => res.json(dbOwner))
    },

    // Get all user info
    findById: function(req,res) {
        db.Owner
        .findById(req.params.id)
        .then(dbOwner => res.json(dbOwner))
        .catch(err => status(422).json(err))
    }
}

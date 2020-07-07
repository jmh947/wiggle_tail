const router = require("express").Router();

const ownerController = require("../../controllers/onwerController")

    router.route("/")
    //Server request to insert owner data to the database
    .post(ownerController.create)
    .get(ownerController.findAll)

    router.route("/:id")
    
    //Server request to GET all the pet from this owner
    //Server request to GET owner data to the database
    .get(ownerController.findById)
    //Server request to remove the pet 
    .delete(ownerController.remove)
    //Server request to remove the pet 
    .put(ownerController.update)

    module.exports = router;
const router = require("express").Router();

const ownerController = require("../../controllers/ownerController")
const petController = require("../../controllers/petController")
const petSitterController = require("../../controllers/petSitterController")

    router.route("/:id")
    //Server request to insert owner data to the database
    .post(ownerController.create)
    //Server request to GET owner data to the database
    .get(ownerController.findById)


    router.route("/")
    //Server request to insert pet data to the database
    .post(petController.create)
    //Server request to GET all the pet from this owner
    .get(petController.findAll)
    //Server request to remove the pet 
    .delete(petController.remove)

    router.route("/:id")
    //Server request to insert sitter data to the database
    .post(petSitterController.create)
    //Server request to get pet sitter info 
    .get(petSitterController.findById)
    //Server request to remove the pet sitter
    .delete(petSitterController.remove)

   

    
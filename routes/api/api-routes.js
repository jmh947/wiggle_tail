const router = require("express").Router();

const ownerController = require("../../controllers/ownerController")
const petController = require("../../controllers/petController")


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
   

    
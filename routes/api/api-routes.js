const router = require("express").Router();

const ownerController = require("../../controllers/petController")


    router.route("/:id")
    //Server request to insert owner data to the database
    .post(ownerController.create)
    //Server request to GET owner data to the database
    .get(ownerController.findById)


    router.route("/")
   

    
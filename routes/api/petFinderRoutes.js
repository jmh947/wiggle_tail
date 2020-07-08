const router = require("express").Router();


const petController = require("../../controllers/petFinderController")


router.route("/")
//Server request to insert owner data to the database

.get(petController.findAll)

 


module.exports = router;
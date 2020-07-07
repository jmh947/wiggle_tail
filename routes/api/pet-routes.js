const router = require("express").Router();


const petController = require("../../controllers/petController")


router.route("/")
//Server request to insert owner data to the database
.post(petController.create)
.get(petController.findAll)

router.route("/:id")

//Server request to GET all the pet from this owner
//Server request to GET owner data to the database
.get(petController.findById)
//Server request to remove the pet 
.delete(petController.remove)
//Server request to remove the pet 
.put(petController.update)


module.exports = router;
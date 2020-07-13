const router = require("express").Router();

const petSitterController = require("../../controllers/petSitterController")

router.route("/")
//Server request to insert owner data to the database
.post(petSitterController.create)
.get(petSitterController.findAll)

router.route("/:id")

//Server request to GET all the pet from this owner
//Server request to GET owner data to the database
.get(petSitterController.findById)
//Server request to remove the pet 
.delete(petSitterController.remove)
//Server request to remove the pet 
.put(petSitterController.update)

router.route("/zipcode/:zipcode")
.get(petSitterController.findByZipcode)
  
 module.exports = router;



   

    
const router = require("express").Router();
const ownerApiRoutes = require("./owner-routes");
const petApiRoutes = require("./pet-routes");
const petsitterApiRoutes = require("./petsitter-routes");
const petFinderApiRoutes = require("./petFinderRoutes");

// Owner Route
router.use("/petfinder", petFinderApiRoutes);
router.use("/ownerprofile", ownerApiRoutes);
//Pet Route
router.use("/petprofile", petApiRoutes)

//Pet Sitter Route
router.use("/petsitterprofile", petsitterApiRoutes)

module.exports = router;
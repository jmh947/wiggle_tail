const router = require("express").Router();
const allApiRoutes = require("./api-routes");

// Owner Routes
router.use("/ownerprofile", allApiRoutes);


module.exports = router;
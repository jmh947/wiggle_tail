const router = require("express").Router();
const allApiRoutes = require("./api-routes");

// Owner Route
router.use("/ownerprofile", allApiRoutes);

//Pet Route
router.use("/petprofile", allApiRoutes)

module.exports = router;
const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
const authRoutes = require("./authRoutes");
const apiRoutes = require("./apiRoutes");

//auth routes
router.use("/auth", authRoutes);

//api routes
router.use("/api", apiRoutes);

//html routes
router.use("/", htmlRoutes);

module.exports = router;
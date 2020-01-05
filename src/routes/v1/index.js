import authRoutes from "./auth"

const router = require("express").Router()

// Using routes
router.use("/auth", authRoutes)

// Exports router
module.exports = router

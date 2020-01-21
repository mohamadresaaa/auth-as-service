const authRoutes = require("./auth")
const userRoutes = require("./user")

const router = require("express").Router()

// middleware
const authorization = require("../../middleware/authorization")

// Using routes
router.use("/auth", authRoutes)
router.use("/user", authorization, userRoutes)

// Exports router
module.exports = router

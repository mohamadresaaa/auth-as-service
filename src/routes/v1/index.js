// Routes
const accountRoutes = require("./account")
const authRoutes = require("./auth")
const userRoutes = require("./user")

const router = require("express").Router()

// Middleware
const authorization = require("../../middleware/authorization")

// Using routes
router.use("/account", accountRoutes)
router.use("/auth", authRoutes)
router.use("/user", authorization, userRoutes)

// Exports router
module.exports = router

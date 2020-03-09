const router = require("express").Router()

// Controllers
const { v1 } = require("../../controllers")

/** @define routes */

// Status of users
router.get("/accountInformation",
  v1.sms.accountInfo)

// Exports router
module.exports = router

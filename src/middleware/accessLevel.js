const { ErrorMessage } = require("../lib/messages")

module.exports = (req, res, next) => {
  try {
    // Separate route and session from request
    const { baseUrl, session } = req

    // Get role of the route
    const role = baseUrl.replace(/(\/[\w.]+\/[\w.]+\/)/, "")

    // If the user has the desired role to pass, return next
    if (session.user.roles.includes(role)) {
      return next()
    }

    // Otherwise return error
    throw new ErrorMessage("Access denied", "Authentication failed", 403)
  } catch (error) {
    next(error)
  }
}

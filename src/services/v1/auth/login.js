const { ErrorMessage } = require("../../../lib/messages")

/** Sign in user
 * @param {object} controller
 * @param {string} email from req.body
 * @param {string} password from req.body
 * @param {array} headers from req.headers
 * @param {string} device from req.device
 * @param {object} res from express
 * @returns {response} message and user
 */

module.exports = async (controller, { body: { email, password }, header, connection, device }, res) => {
  try {
    function getClientIp () {
      var ipAddress
      // Amazon EC2 / Heroku workaround to get real client IP
      var forwardedIpsStr = header("x-forwarded-for")
      if (forwardedIpsStr) {
        // 'x-forwarded-for' header may return multiple IP addresses in
        // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
        // the first one
        var forwardedIps = forwardedIpsStr.split(",")
        ipAddress = forwardedIps[0]
      }
      if (!ipAddress) {
        // Ensure getting client IP address still works in
        // development environment
        ipAddress = connection.remoteAddress
      }
      return ipAddress
    };
    // User model
    const { User } = controller[Symbol.for("models")]

    // Find user
    const user = await User.findOne({ $or: [{ email }, { username: email }] })

    // If find user, handle it
    if (user) {
      // If user status is inactive or block
      if (user.status === "inactive" || user.status === "block") {
        throw new ErrorMessage("Account status",
          user.status === "inactive"
            ? "Your account is disabled Please activate your account"
            : "Your account has been blocked See support for reviewing your account",
          403)
      }

      // If password is the same
      if (await user.comparePassword(password)) {
        // Generate jwt token and save to session, return info message and user
        return controller.infoMessage(res, {
          message: "Sign in successfully completed",
          properties: { ...user.toAuthJson(await user.generateSession(getClientIp(), device)) },
          status: 200
        })
      }

      // Otherwise, handle it
      throw new ErrorMessage("Unauthorized user", "Incorrect email or password", 401)
    }

    // Otherwise, user is found return error message
    throw new ErrorMessage("Unauthorized user", "Incorrect email or password", 401)
  } catch (error) {
    throw error
  }
}

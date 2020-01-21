const { ErrorMessage } = require("../../../lib/messages")

/** User account deactivation
 * @param {object} controller
 * @param {object} user from req.user
 * @param {object} res from express
 * @returns {response} message and user
 */
module.exports = async (controller, { body: { password }, session: { user } }, res) => {
  try {
    // Session model
    const { Session } = controller[Symbol.for("models")]

    // Compare password, If password is the same
    if (user.comparePassword(password)) {
      // Change status to inactive
      await user.set({ status: "inactive" }).save()

      // Remove sessions of user
      await Session.deleteMany({ user: user.id })

      // Return info message
      return controller.infoMessage(res, {
        message: "Your account has been successfully deactivated",
        status: 200
      })
    }

    // Otherwise, return error
    throw new ErrorMessage("Invalid Data", "Your password was incorrect", 422)
  } catch (error) {
    throw error
  }
}

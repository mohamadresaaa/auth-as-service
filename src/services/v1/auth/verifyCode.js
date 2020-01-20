const { ErrorMessage } = require("../../../lib/messages")

/** verify code
 * @param {object} controller
 * @param {string} code from req.params.code
 * @param {object} res from express
 * @returns {response} message
 */
module.exports = async (controller, code, res) => {
  try {
    // VerificationCode model
    const { VerificationCode } = controller[Symbol.for("models")]

    // Find verification code
    const validCode = await VerificationCode.findOne({
      code,
      expiryDate: { $gt: new Date() },
      for: "Password recovery",
      used: false
    }).populate({ path: "user", select: "email" }).lean()

    // If exists, return message and email of user
    if (validCode) {
      return controller.infoMessage(res, {
        message: "Verification code is valid",
        properties: { email: validCode.user.email },
        status: 200
      })
    }

    // Otherwise, return error message
    throw new ErrorMessage("Invalid verification code", "Verification code is incorrect", 400)
  } catch (error) {
    throw error
  }
}

/** Current user
 * @param {object} controller
 * @param {object} user from req.user
 * @param {object} res from express
 * @returns {response} message and user
 */
module.exports = async (controller, { user }, res) => {
  try {
    // Return info message and user information
    return controller.infoMessage(res, {
      message: "Current user",
      properties: { ...user.toAuthJson(null) },
      status: 200
    })
  } catch (error) {
    throw error
  }
}

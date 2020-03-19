/** Sign out user
 * @param {object} controller
 * @param {object} session from req.session
 * @param {object} res from express
 * @returns {response} message
 */
module.exports = async (controller, session, res) => {
	try {
		// Remove session
		await session.remove()

		// Return info message
		return controller.infoMessage(res, {
			message: "Exit succeeded",
			status: 200
		})
	} catch (error) {
		throw error
	}
}

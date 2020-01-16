module.exports = async (controller, data, res) => {
  try {
    const { User } = controller[Symbol.for("models")]

    // Create new user
    const user = await new User({ ...data }).save()

    // Create a verification code for account activation

    // Send verification code to email
  } catch (error) {
    throw error
  } finally {
    // Return info message
    return controller.infoMessage(res, {
      message: "Please refer to your email for activation",
      status: 200
    })
  }
}
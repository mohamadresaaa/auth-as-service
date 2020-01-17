module.exports = async (controller, { email }, res) => {
  try {
    // { User, VerificationCode } Model
    const { User, VerificationCode } = controller[Symbol.for("models")]

    // Find user with email or username
    const user = await User.findOne({ $or: [{ email }, { username: email }] })

    // If user exists
    if (user) {
      // Create a verification code for password recovery
      const newVerificationCode = await new VerificationCode({
        for: "Password recovery",
        expiryDate: new Date(new Date().setMinutes(new Date().getMinutes() + 10)),
        user: user.id
      }).save()

      // Send email
    }

    // Return info message
    return controller.infoMessage(res, {
      message: "Password recovery link was sent to your email",
      status: 200
    })
  } catch (error) {
    throw error
  }
}

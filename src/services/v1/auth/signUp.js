module.exports = async (controller, data, res) => {
  try {
    // Model { User, VerificationCode }
    const { User, VerificationCode } = controller[Symbol.for("models")]

    // Create new user
    const newUser = await new User({ ...data }).save()

    // Create a verification code for account activation
    const newVerificationCode = await new VerificationCode({ 
      for: "Account activation",
      expiryDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      user: newUser.id
    }).save()

    // Send verification code to email

    // Return info message
    return controller.infoMessage(res, {
      message: "Please refer to your email for activation",
      status: 200
    })
  } catch (error) {
    throw error
  }
}
const { ErrorMessage } = require("../../../lib/messages")

module.exports = async (controller, { code, password }, res) => {
    try {
        // VerificationCode model
        const { VerificationCode } = controller[Symbol.for("models")]

        // Find verification code
        const verifyCode = await VerificationCode.findOne({
            for: "Password recovery",
            code,
            expiryDate: { $gt: new Date() },
            used: false,
        }).populate("user")

        // If find verification code, handle it
        if (verifyCode) {
            await verifyCode.user.set({ password }).save()

            // Remove sessions of user
            // await Session.deleteMany({ user: user.id })

            // Expire verification code
            await verifyCode.updateOne({ used: true })

            // Return info message
            return controller.infoMessage(res, {
                message: "Your password has been successfully retrieved",
                status: 200
            })
        }

        // Otherwise, return error message
        throw new ErrorMessage("Invalid verification code", "Verification code is incorrect", 422)
    } catch (error) {
        throw error
    }
}

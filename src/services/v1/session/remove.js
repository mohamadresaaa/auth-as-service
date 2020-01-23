module.exports = async (controller, id, res) => {
  try {
    // Session model
    const { Session } = controller[Symbol.for("models")]

    // Find and remove session
    await Session.deleteOne({ _id: id })

    // Return info message
    return controller.infoMessage(res, {
      message: "Session was deleted",
      status: 200
    })
  } catch (error) {
    throw error
  }
}

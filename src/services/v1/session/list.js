module.exports = async (controller, currentSession, res) => {
  try {
    // Session model
    const { Session } = controller[Symbol.for("models")]

    // Find sessions of user
    const sessions = await Session.find({ user: currentSession.user }).lean()

    // Set current session on list of session
    sessions.map(item => {
      item.id === currentSession.id ? item.isCurrent = true : item.isCurrent = false
    })

    return controller.infoMessage(res, {
      message: "Get sessions information successfully",
      properties: { sessions },
      status: 200
    })
  } catch (error) {
    throw error
  }
}

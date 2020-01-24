module.exports = async (controller, currentSession, res) => {
  try {
    // Session model
    const { Session } = controller[Symbol.for("models")]

    // Find sessions of user
    const sessions = await Session.find({ user: currentSession.user }).select("_id device ip createdAt").lean()

    // Set current session on list of session
    sessions.map(item => {
      // eslint-disable-next-line eqeqeq
      item._id == currentSession.id ? item.isCurrent = true : item.isCurrent = false
      item.createdAt = item.createdAt.toISOString().slice(0, 10)
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

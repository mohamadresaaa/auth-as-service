module.exports = async (controller, res) => {
  try {
    // User model
    const { User } = controller[Symbol.for("models")]

    // Grouping users with status
    const users = await User.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ])

    // Return info message
    return controller.infoMessage(res, {
      message: "Status of users",
      properties: { users },
      status: 200
    })
  } catch (error) {
    throw error
  }
}

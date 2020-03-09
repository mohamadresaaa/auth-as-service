const smsService = require("../../../lib/smsService")

module.exports = async (controller, res) => {
  try {
    // Http request to ghasedak for account information
    const result = await smsService("account/info", "get")

    // Return info message
    return controller.infoMessage(res, {
      message: "Successfully received information",
      properties: result,
      status: 200
    })
  } catch (error) {
    throw error
  }
}

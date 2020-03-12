const fs = require("fs")
const { ErrorMessage, PublicErrorMessage } = require("../lib/messages")

const apiErrorHandler = (error, req, res, next) => {
  if (req.file) fs.unlinkSync(req.file.path)

  switch (config.server[Symbol.for("mode")]) {
    case "development":
      return res.status(error.status ? error.status : 500).json({
        message: error.message,
        stack: error.stack
      })
    case "production":
      return res.status(error.status ? error.status : 500).json(new PublicErrorMessage(error))
  }
}

const apiError404 = (req, res, next) => {
  try {
    throw new PublicErrorMessage(ErrorMessage.errNotFound())
  } catch (error) {
    next(error)
  }
}

module.exports = { apiError404, apiErrorHandler }

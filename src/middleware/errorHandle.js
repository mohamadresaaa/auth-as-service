import { PublicErrorMessage, ErrorMessage } from "../lib/messages"
import fs from "fs"

export const apiErrorHandler = (error, req, res, next) => {
  if (req.file) fs.unlinkSync(req.file.path)

  switch (process.env.MODE || "development") {
    case "development":
      return res.status(error.status ? error.status : 500).json({
        message: error.message,
        stack: error.stack
      })
    case "production":
      return res.status(error.status ? error.status : 500).json(new PublicErrorMessage(error))
  }
}

export const apiError404 = (req, res, next) => {
  try {
    throw new PublicErrorMessage(ErrorMessage.errNotFound())
  } catch (error) {
    next(error)
  }
}

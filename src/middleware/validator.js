import { ErrorMessage } from "../lib/messages"
import fs from "fs"

/** validation data
 * @package joi
 * @param schema
 * @return values & error
 */
export const validator = schema => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body)
    if (error) {
      if (req.file) fs.unlinkSync(req.file.path)
      return res.status(422).json(new ErrorMessage("Invalid Data", error.details[0].message.replace(/(\\")+/g, ""), 422))
    }
    if (!req.value) req.value = {}
    req.value.body = value
    next()
  }
}

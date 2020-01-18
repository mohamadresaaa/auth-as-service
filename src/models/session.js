const { Schema, model } = require("mongoose")

const sessionSchema = new Schema({
  device: {
    required: true,
    type: Object
  },
  expiryDate: {
    required: true,
    type: Date
  },
  token: {
    required: true,
    type: String,
    unique: true
  },
  user: {
    ref: "User",
    required: true,
    type: Schema.Types.ObjectId
  }
}, { timestamps: true, autoIndex: true })

module.exports = model("session", sessionSchema)

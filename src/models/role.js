const { Schema, model } = require("mongoose")

const roleSchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true
  }
})

// Index fields
roleSchema.index({ name: 1 })

module.exports = model("Role", roleSchema)

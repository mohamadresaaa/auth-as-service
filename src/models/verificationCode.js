const { Schema, model } = require("mongoose")

const verificationCodeSchema = new Schema({
    action: {
        required: true,
        type: Number,
    },
    code: {
        // default: v4(),
        required: true,
        type: String,
        unique: true,
    },
    expiryDate: {
        required: true,
        type: Date,
    },
    used: {
        default: false,
        type: Boolean,
    },
    user: {
        ref: "User",
        required: true,
        type: Schema.Types.ObjectId,
    },
})

// Index fields
verificationCodeSchema.index({ code: 1 })
verificationCodeSchema.index({ expiryDate: -1 })

module.exports = model("verificationCode", verificationCodeSchema)

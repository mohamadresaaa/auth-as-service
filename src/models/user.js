import { Schema, model } from "mongoose"

const userSchema = new Schema({
  avatar: {
    default: null,
    type: String
  },
  bio: {
    default: null,
    type: String
  },
  birthday: {
    default: null,
    type: Date
  },
  email: {
    lowercase: true,
    required: true,
    trim: true,
    type: String,
    unique: true
  },
  firstName: {
    default: null,
    type: String
  },
  lastName: {
    default: null,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  roles: {
    default: ["user"],
    type: [String]
  },
  status: {
    default: "inactive",
    type: String
  },
  username: {
    lowercase: true,
    required: true,
    trim: true,
    type: String,
    unique: true
  }
}, { timestamps: true })

// Index fields
userSchema.index({ email: 1 })
userSchema.index({ username: 1 })
userSchema.index({ createdAt: -1 })

export default model("User", userSchema)

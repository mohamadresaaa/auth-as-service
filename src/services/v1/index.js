const currentUser = require("./account/currentUser")
const passwordRecovery = require("./auth/passwordRecovery")
const resetPassword = require("./auth/resetPassword")
const signIn = require("./auth/signIn")
const signOut = require("./auth/signOut")
const signUp = require("./auth/signUp")
const verifyCode = require("./auth/verifyCode")

module.exports = {
  currentUser,
  passwordRecovery,
  resetPassword,
  signIn,
  signOut,
  signUp,
  verifyCode
}

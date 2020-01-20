const passwordRecovery = require("./auth/passwordRecovery")
const resetPassword = require("./auth/resetPassword")
const signIn = require("./auth/signIn")
const signUp = require("./auth/signUp")
const verifyCode = require("./auth/verifyCode")

module.exports = {
  signUp,
  signIn,
  passwordRecovery,
  resetPassword,
  verifyCode
}

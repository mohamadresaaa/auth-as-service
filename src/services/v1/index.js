const passwordRecovery = require("./auth/passwordRecovery")
const resetPassword = require("./auth/resetPassword")
const verifyCode = require("./auth/verifyCode")
const signIn = require("./auth/signIn")
const signUp = require("./auth/signUp")

module.exports = {
  signUp,
  signIn,
  passwordRecovery,
  resetPassword,
  verifyCode
}

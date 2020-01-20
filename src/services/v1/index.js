const passwordRecovery = require("./auth/passwordRecovery")
const resetPassword = require("./auth/resetPassword")
const signIn = require("./auth/signIn")
const signUp = require("./auth/signUp")
const verifyCode = require("./auth/verifyCode")

module.exports = {
  passwordRecovery,
  resetPassword,
  signIn,
  signUp,
  verifyCode
}

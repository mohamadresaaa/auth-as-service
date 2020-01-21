const accountActivation = require("./account/accountActivation")
const currentUser = require("./account/currentUser")
const passwordRecovery = require("./auth/passwordRecovery")
const profile = require("./user/profile")
const resetPassword = require("./auth/resetPassword")
const signIn = require("./auth/signIn")
const signOut = require("./auth/signOut")
const signUp = require("./auth/signUp")
const verifyCode = require("./auth/verifyCode")

module.exports = {
  accountActivation,
  currentUser,
  passwordRecovery,
  profile,
  resetPassword,
  signIn,
  signOut,
  signUp,
  verifyCode
}

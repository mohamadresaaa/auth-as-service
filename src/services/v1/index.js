const activation = require("./account/activation")
const login = require("./auth/login")
const logout = require("./auth/logout")
const passwordRecovery = require("./auth/passwordRecovery")
const profile = require("./user/profile")
const reactivation = require("./account/reactivation")
const register = require("./auth/register")
const resetPassword = require("./auth/resetPassword")
const verifyCode = require("./auth/verifyCode")

module.exports = {
  activation,
  login,
  logout,
  passwordRecovery,
  profile,
  reactivation,
  register,
  resetPassword,
  verifyCode
}

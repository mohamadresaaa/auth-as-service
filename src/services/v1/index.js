const activation = require("./account/activation")
const login = require("./auth/login")
const logout = require("./auth/logout")
const passwordRecovery = require("./auth/passwordRecovery")
const profile = require("./user/profile")
const register = require("./auth/register")
const resetPassword = require("./auth/resetPassword")
const verifyCode = require("./auth/verifyCode")

module.exports = {
  activation,
  login,
  logout,
  passwordRecovery,
  profile,
  register,
  resetPassword,
  verifyCode
}

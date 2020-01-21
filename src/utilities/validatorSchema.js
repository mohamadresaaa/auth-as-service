const joi = require("@hapi/joi")

const login = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().required()
})

const passwordRecovery = joi.object().keys({
  email: joi.string().required()
})

const register = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  password: joi.string().min(8).required(),
  username: joi.string().alphanum().required()
})

const resetPassword = joi.object().keys({
  code: joi.string().required(),
  confirmPassword: joi.string().valid(joi.ref("password")).messages({ "any.only": "confirm password must match password" }),
  password: joi.string().min(8).required()
})

const reactivation = joi.object().keys({
  username: joi.string().alphanum().required()
})

module.exports = {
  login, passwordRecovery, reactivation, register, resetPassword
}

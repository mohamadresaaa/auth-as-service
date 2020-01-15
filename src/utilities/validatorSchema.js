const joi = require("@hapi/joi")

const register = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  password: joi.string().min(8).required(),
  username: joi.string().alphanum().required()
})

const login = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().required()
})

const passwordRecovery = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }).required()
})

const resetPassword = joi.object().keys({
  code: joi.string().required(),
  password: joi.string().min(8).required(),
  passwordConfirmation: joi.string().valid(joi.ref("password")).messages({ "any.only": "passwordConfirmation must match password" })
})

module.exports = { register, login, passwordRecovery, resetPassword }

module.exports = (controller, data, res) => {
  const { User } = controller[Symbol.for("models")]
  console.log(User.find())
  return res.json(data)
}

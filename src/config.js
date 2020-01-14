module.exports = {
  server: {
    logMode: process.env.LOG_MODE || "dev",
    [Symbol.for("port")]: process.env.PORT || 3030
  }
}

module.exports = {
  database: {
    mongodb: {
      [Symbol.for("mongodb options")]: {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      [Symbol.for("mongodb url")]: process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/jrawDB"
    }
  },
  server: {
    logMode: process.env.LOG_MODE || "dev",
    [Symbol.for("port")]: process.env.PORT || 3000
  }
}

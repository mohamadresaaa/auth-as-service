module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    "standard"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"]
  }
}

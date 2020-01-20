module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    config: "readonly",
    test: "readonly",
    expect: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "no-useless-catch": 0,
    "sort-keys": "error"
  }
}
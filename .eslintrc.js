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
    SharedArrayBuffer: "readonly",
    config: "readonly"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "sort-imports": ["error", {
      "ignoreCase": false,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }]
  }
}
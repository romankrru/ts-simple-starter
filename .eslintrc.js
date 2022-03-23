module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },

  extends: [
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },

  plugins: ["@typescript-eslint", "jest"],

  rules: {
    "import/extensions": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
};

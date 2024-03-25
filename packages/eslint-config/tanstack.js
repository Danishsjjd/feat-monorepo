/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["@tanstack/query"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@tanstack/query/exhaustive-deps": "warn",
    "@tanstack/query/no-rest-destructuring": "warn",
    "@tanstack/query/stable-query-client": "warn",
  },
}

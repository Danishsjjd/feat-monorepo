/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "./react.js"],
  env: {
    node: true,
    browser: true,
  },
}

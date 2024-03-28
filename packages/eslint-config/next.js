const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "./react.js"],
  env: {
    node: true,
    browser: true,
  },
  ignorePatterns: [".*.js", "node_modules/"],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
}

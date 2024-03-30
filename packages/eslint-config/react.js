const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")
module.exports = {
  plugins: ["@typescript-eslint", "only-warn"],
  extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended", "prettier"],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
      react: {
        version: "detect",
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css", ".*.js"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
  },
  overrides: [
    { files: ["*.js?(x)", "*.ts?(x)"] },
    {
      files: ["*.config.js"],
      env: {
        node: true,
      },
    },
  ],
}

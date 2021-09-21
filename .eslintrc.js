module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
    commonjs: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["react", "import"],
  rules: {
    indent: ["error", 2],
    quotes: ["warn", "double"],
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

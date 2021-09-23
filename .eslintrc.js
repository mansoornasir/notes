module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "google",
    "plugin:cypress/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["react", "import", "jest"],
  rules: {
    "quote-props": ["error", "as-needed"],
    indent: ["error", 2],
    "max-len": ["error", {code: 180, tabWidth: 4, ignoreComments: true}],
    quotes: [2, "double", {avoidEscape: true, allowTemplateLiterals: true}],
    "react/react-in-jsx-scope": "off",
    "linebreak-style": 0,
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

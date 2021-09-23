module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
    commonjs: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "google"],
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
    "quote-props": ["error", "as-needed"],
    indent: ["error", 2],
    quotes: ["warn", "double"],
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

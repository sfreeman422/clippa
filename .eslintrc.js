module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true
  },
  // extends: "airbnb-base",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "react-native", "prettier"],
  parser: "babel-eslint",
  rules: {
    strict: [0],
    "no-unused-vars": ["error", { varsIgnorePattern: "React" }],
    "prettier/prettier": [2],
    "no-underscore-dangle": [0],
    "no-param-reassign": "warn",
    "no-use-before-define": [0],
    "no-await-in-loop": [0],
    "consistent-return": "warn",
    "no-restricted-syntax": [0],
    "comma-dangle": [0],
    "function-paren-newline": [0],
    quotes: ["error", "double"],
    "no-extra-boolean-cast": [0],
    // do not require validation of props
    "react/prop-types": "warn",
    // throw an error for unused imports of react components
    "react/jsx-uses-vars": 1,
    // throw error if writing JSX without requiring React
    "react/react-in-jsx-scope": 1,
    // allow files with .js and .jsx to contain jsx
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-space-before-closing": 1,
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-curly-spacing": 1,
    "react/jsx-boolean-value": 1,
    "react/no-string-refs": 1,
    "react/jsx-wrap-multilines": 1,
    "react/self-closing-comp": 1,
    "react/jsx-closing-bracket-location": 1,
    "react-native/no-unused-styles": 2
  }
};

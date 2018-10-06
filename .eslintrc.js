module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "no-use-before-define": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "no-underscore-dangle": 0,
    "react/forbid-prop-types": 0
  },
  env: {
    browser: true
  }
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "keyword-spacing": "error",
    "react-hooks/exhaustive-deps": "error",
    "prefer-arrow/prefer-arrow-functions": "error",
    "import/prefer-default-export": "error",
    "react/prop-types": 0,
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "all",
        "proseWrap": "preserve",
        "arrowParens": "avoid"
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  },
};

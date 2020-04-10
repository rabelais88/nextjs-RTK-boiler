module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 1,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'no-useless-constructor': 0,
    'react/react-in-jsx-scope': 0,
    'implicit-arrow-linebreak': 0,
    'react/prop-types': 1,
    'import/prefer-default-export': 1,
    'react/jsx-one-expression-per-line': 0,
    'react/button-has-type': 1,
    'max-len': 0,
    'prefer-destructuring': 1,
    'object-curly-newline': 0,
  },
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'arrow-parens': [1, 'as-needed'],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'one-var': 0,
    'no-unused-expressions': [1, { allowShortCircuit: true }],
    'import/prefer-default-export': 0,
    'consistent-return': 0,
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

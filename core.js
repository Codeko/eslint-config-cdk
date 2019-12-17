module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['off', { accessibility: 'explicit' }],
    'indent': 'off', // TS-Eslint handles it
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    'semi': 'off', // TS-Eslint handles it
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/space-within-parens': ['off', 'never'],
    '@typescript-eslint/unified-signatures': 'error',
    'space-before-function-paren': 'off', // TS-Eslint handles it
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'arrow-body-style': 'off', // it wasn't detecting comments, might think of adding it in the future
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'guard-for-in': 'error',
    'id-match': 'error',
    'import/order': ['error', {
      'newlines-between': 'never',
      'alphabetize': {
        order: 'asc',
      },
      'groups': [
        ['builtin', 'external', 'internal'],
        ['parent', 'sibling', 'index'],
      ],
    }],
    'import/default': 'off',
    'import/export': 'error',
    'import/named': 'off',
    'import/namespace': 'error',
    'import/no-duplicates': 'warn',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'error',
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-new-wrappers': 'error',
    'no-shadow': ['error', { hoist: 'all' }],
    'no-underscore-dangle': 'off', /* we want to activate this in the future */
    'no-unused-vars': 'off', // handled by typescript-eslint
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'radix': 'error',
    // 'no-undef': 0, ??
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
}

# Eslint Configuration

This is a set of eslint configuration rules and settings to extend from in other projects.

## Core

It's the main and basic linter configuration, where typescript rules are included.

In case of just needing this core rules, simply add extend from it in the eslint configuration file as:

``extends: 'cdk/core'``

Rules for core:

```
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
'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
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
'arrow-body-style': 'off',
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
'operator-linebreak': ['error', 'before'],
'one-var': ['error', 'never'],
'quote-props': ['error', 'consistent-as-needed'],
'radix': 'error'
```

## React Native

Extending to react-native gives the linter for a rn application.
React-native already extends from core.

Just add to your eslint configuration the extend option:

``extends: 'cdk/react-native'``

Rules for react-native:

```
'no-alert': 'warn',
'no-div-regex': 'warn', at beginning of regular expression (off by default)
'no-script-url': 'warn',

'no-shadow': 'warn',

'no-mixed-requires': 'error',

'jsx-quotes': ['error', 'prefer-double'],
'consistent-this': ['error', 'self'],

'no-invalid-this': 'off',

// React Plugin
// The following rules are made available via `eslint-plugin-react`.
'react/display-name': 'off',
'react/jsx-boolean-value': 'off',
'react/jsx-no-comment-textnodes': 'warn',
'react/jsx-no-duplicate-props': 'error',
'react/jsx-no-undef': 'error',
'react/jsx-sort-props': 'off',
'react/jsx-uses-react': 'warn',
'react/jsx-uses-vars': 'warn',
'react/jsx-no-literals': 'warn',
'react/no-did-mount-set-state': 'warn',
'react/no-did-update-set-state': 'warn',
'react/no-multi-comp': 'off',
'react/no-string-refs': 'warn',
'react/no-unknown-property': 'off',
'react/prop-types': 'off',
'react/react-in-jsx-scope': 'warn',
'react/self-closing-comp': 'warn',
'react/wrap-multilines': 'off',

'react-native/no-unused-styles': 'error',
'react-native/split-platform-components': 'error',
'react-native/no-inline-styles': 'error',
'react-native/no-color-literals': 'error',
```

# License

Copyright © 2019 Codeko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

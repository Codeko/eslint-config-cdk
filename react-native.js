module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-native',
  ],
  extends: [
    './core',
  ],
  env: {
    'react-native/react-native': true,
    'jasmine': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    jest: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    window: false,
    XMLHttpRequest: false,
    pit: false,
  },
  rules: {
    // General

    'no-alert': 'warn', // disallow the use of alert, confirm, and prompt
    'no-div-regex': 'warn', // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-script-url': 'warn', // disallow use of javascript: urls.

    'no-shadow': 'warn', // disallow declaration of variables already declared in the outer scope

    'no-mixed-requires': 'error', // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)

    'jsx-quotes': ['error', 'prefer-double'],
    'consistent-this': ['error', 'self'], // enforces consistent naming when capturing the current execution context (off by default)

    // //// //
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

  },
}

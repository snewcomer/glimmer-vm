module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:node/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'callback-return': 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'error',
    'consistent-this': 'error',
    'default-case': 'error',
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],
    eqeqeq: 'error',
    'func-name-matching': 'error',
    'func-names': 'off',
    'func-style': ['error', 'declaration'],
    'global-require': 'off',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'init-declarations': 'off',
    'line-comment-position': 'error',
    'lines-around-directive': 'error',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'new-cap': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'no-alert': 'error',
    'no-await-in-loop': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-console': 'off',
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-sync': 'off',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'object-shorthand': 'error',
    'one-var': 'off',
    'operator-assignment': 'error',
    'prefer-const': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    radix: 'error',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': ['error', 'always'],
    strict: 'off',
    'symbol-description': 'error',
    'valid-jsdoc': 'off',
    'vars-on-top': 'error',
    yoda: ['error', 'never'],

    // replace ESLint rules with TypeScript-compatible rules
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'testem-browserstack.js',
        'bin/**/*.js',
        'build/**/*.js',
        'server/**/*.js',
      ],
      env: {
        es6: true,
        node: true,
      },
    },
    // bin scripts
    {
      files: ['bin/**/*.js'],
      rules: {
        'no-process-exit': 'off',
        'node/shebang': 'off',
      },
    },
    // source packages
    {
      files: ['packages/**/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    // TypeScript source packages
    {
      files: ['packages/**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      rules: {
        'no-label-var': 'off',

        'node/no-extraneous-import': 'off',
        'node/no-missing-import': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-unsupported-features/node-builtins': 'off',

        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'off',

        'callback-return': 'off',
        'consistent-return': 'off',
        'consistent-this': 'off',
        'constructor-super': 'off',
        'default-case': 'off',
        'dot-notation': 'off',
        'func-name-matching': 'off',
        'func-style': 'off',
        'guard-for-in': 'off',
        'line-comment-position': 'off',
        'new-cap': 'off',
        'no-bitwise': 'off',
        'no-case-declarations': 'off',
        'no-constant-condition': 'off',
        'no-continue': 'off',
        'no-debugger': 'error',
        'no-duplicate-imports': 'off',
        'no-else-return': 'off',
        'no-empty': 'off',
        'no-fallthrough': 'off',
        'no-inline-comments': 'off',
        'no-invalid-this': 'off',
        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-lonely-if': 'off',
        'no-multi-assign': 'off',
        'no-negated-condition': 'off',
        'no-new': 'off',
        'no-script-url': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-undef-init': 'off',
        'no-unneeded-ternary': 'off',
        'no-unsafe-finally': 'off',
        'no-unused-expressions': 'error',
        'no-useless-call': 'off',
        'no-useless-concat': 'off',
        'no-useless-constructor': 'off',
        'no-useless-escape': 'off',
        'no-useless-return': 'off',
        'no-warning-comments': 'off',
        'object-shorthand': 'off',
        'operator-assignment': 'off',
        'prefer-reflect': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'spaced-comment': 'off',
      },
    },
  ],
};

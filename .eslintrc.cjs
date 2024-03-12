/* eslint-env node */

module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {
        // Workaround to avoid errors about not being able to resolve the modules
        project: 'tsconfig.app.json'
      }
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Regular JavaScript
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    // Disable the TypeScript version of the rule
    '@typescript-eslint/no-unused-vars': 'off'
  }
}

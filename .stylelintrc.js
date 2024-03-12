/**
 * @type {import('stylelint').Config}
 */
export default {
  plugins: ['stylelint-scss', 'stylelint-suitcss', 'stylelint-order'],
  extends: [
    'stylelint-config-suitcss',
    'stylelint-config-standard-scss',
    'stylelint-config-hudochenkov/order'
  ],
  overrides: [
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass'
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard-vue/scss']
    }
  ],
  rules: {
    // Allow at-rules (SASS) FIXME: it is not working when using `--fix`
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/properties-alphabetical-order': null
  }
}

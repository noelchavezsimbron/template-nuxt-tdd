// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    'padded-blocks': [
      'error',
      {
        classes: 'always'
      }
    ],
    quotes: [
      'error',
      'single'
    ]
  }
}

module.exports = {
  plugins: [
    require.resolve('../index')
  ],
  rules: {
    'rscss/no-descendant-combinator': 'always',
    'rscss/class-format': true
  }
}
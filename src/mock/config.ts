export default [
  {
    host: process.env.VUE_APP_BASEAPI,
    files: require.context('./base-api', true, /\.ts$/)
  }
]

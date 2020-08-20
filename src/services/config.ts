export default [
  {
    name: 'BaseService',
    instance: 'http',
    host: process.env.VUE_APP_BASEAPI,
    files: require.context('./base-service', true, /\.ts$/),
    config: {}
  }
]

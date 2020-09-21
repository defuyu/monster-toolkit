const ENV = process.env.NODE_ENV
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || '8033'
const baseUrl = ENV === 'production' ? '' : `http://${HOST}:${PORT}`

module.exports = {
  publicPath: baseUrl
}
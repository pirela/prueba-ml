// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/items',
        permanent: true,
      },
    ]
  },
}
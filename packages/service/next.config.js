
const path = require('path')

// next.config.js
module.exports = {
  output: 'standalone',
  experimental: {
    // outputFileTracingRoot: path.join(__dirname, '../../'),
  },
}
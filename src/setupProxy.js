const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:3000', // Change this to the correct backend server URL
        changeOrigin: true,
    })
  );
};

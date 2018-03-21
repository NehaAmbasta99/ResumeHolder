// server.js
const express = require('express');
const app = express();

const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }
  // define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '../public')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
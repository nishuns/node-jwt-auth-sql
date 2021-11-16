const express = require('express'); // express application call
const app = express.Router(); // express router

app.use('/auth', require('./api/index')); // main route

module.exports = app; // exporting route
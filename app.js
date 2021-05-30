const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.

app.use(logger('dev'));
app.use('/doc', express.static('doc'));
var dd_options = {
    'response_code': true,
    'tags': ['env:staging']
}

var connect_datadog = require('connect-datadog')(dd_options);

// Add the datadog-middleware before your router
app.use(connect_datadog);
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
'use strict';

const express = require('express');

// local modules
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');

// //////// 4
const peopleRoutes = require('./routes/people');

const app = express();

// Global Middlewares
app.use(express.json()); // access the body
app.use(logger);

// //////// 5
// Use our routes from the routing module -> people.js as we did with logger
app.use(peopleRoutes);
// now, create a models directory & create inside it 2 files named index.js & people.model.js
// go to models/index.js for /// 6

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}
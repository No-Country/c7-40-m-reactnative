const express = require('express');
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

// Routers
const { usersRouter } = require('./routes/users.routes');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

app.use(helmet())

app.use(compression())

app.use(morgan('combined'))

// Define endpoints

app.use('/api/v1/users', usersRouter);

// Global error handler
app.use(globalErrorHandler);


// Catch non-existing endpoints
app.all('*', (req, res) => {
	res.status(404).json({
		status: 'error',
		message: `${req.method} ${req.url} does not exists in our server`,
	});
});

module.exports = { app };

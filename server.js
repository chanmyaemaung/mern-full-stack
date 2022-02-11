require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const port = process.env.PORT || 5000

// All my custom middleware
const { errorHandler } = require('./middlewares/errorMiddleware')

// Initialize express app
const app = express()

// Handle middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Handle all routes
app.use('/api/goals', require('./routes/goalRoute'))

// Handle error
app.use(errorHandler)

// Run server
app.listen(port, () =>
	console.log(`Server started on port http://localhost:${port}`)
)

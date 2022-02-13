require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

// Database connection
connectDB()

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
app.use('/api/users', require('./routes/userRoute'))

// Handle error
app.use(errorHandler)

// Run server
app.listen(port, () =>
	console.log(`Server started on port http://localhost:${port}`)
)

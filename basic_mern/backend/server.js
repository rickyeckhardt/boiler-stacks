const express = require('express')
const app = express()

// Allow cross origin requests
const cors = require('cors')
app.use(cors())


// Connect to db
require('./config/db.connect')

// body parsing
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

// Middleware === //
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next()
});

// routes
app.get('/', (req, res, next) => res.json({ success: true, message: 'home route' }))
app.use('/api/', require('./routes/'))


const PORT = 8080
const HOST = 'localhost'
app.listen(PORT, HOST, () => console.log(`Backend server listening on ${HOST}:${PORT}`))
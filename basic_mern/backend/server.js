const express = require('express')
const app = express()

// Connect to db
require('./config/db.connect')


app.get('/', (req, res, next) => res.json({ success: true, message: 'home route' }))


const PORT = 8080
const HOST = 'localhost'
app.listen(PORT, HOST, () => console.log(`Backend server listening on ${HOST}:${PORT}`))
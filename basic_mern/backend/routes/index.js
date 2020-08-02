const express = require('express')
const router = express.Router()

// Include specific routes
router.use('/items/', require('./items/item.routes'))


module.exports = router
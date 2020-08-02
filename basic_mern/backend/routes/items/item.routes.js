const express = require('express')
const router = express.Router()

const Item = require('./Item.model')



// Index Route - Get all Items
router.get('/', async (req, res) => {
    const Items = await Item.find({})
    res.json({ Items })
})

// Create Route
router.post('/', async (req, res) => {
    res.json({ route: 'create' })
})

// Read Route
router.get('/:id', async (req, res) => {
    res.json({ route: 'read' })
})

// Update Route
router.put('/:id', async (req, res) => {
    res.json({ route: 'update' })
})


// Delete Route
router.delete('/:id', async (req, res) => {
    res.json({ route: 'delete' })
})


module.exports = router
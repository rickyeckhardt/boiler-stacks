const express = require('express')
const router = express.Router()

const Item = require('./Item.model')



// Index Route - Get all Items
router.get('/', async (req, res) => {
    const items = await Item.find({})
    res.json({ items })
})

// Create Route
router.post('/', async (req, res) => {

    console.log(req.body)

    let newItem
    try {
        newItem = await Item.create(req.body)
    } catch (error) {
        console.error(error)
        return res.json({
            success: false,
            message: `There was an error on the server trying to create a new item.`
        })
    }

    res.json({
        success: true,
        message: `New item has been created.`,
        newItem
    })
})

// Read Route
router.get('/:id', async (req, res) => {
    let founditem
    try {
        founditem = await Item.findById(req.params.id)
    } catch (error) {
        console.error(error)
        return res.json({
            success: false,
            message: `There was an error on the server trying to find requested item. Item may not exist.`
        })
    }

    return res.json({
        success: true,
        message: `Item has been found`,
        item: founditem
    })
})

// Update Route
router.put('/:id', async (req, res) => {
    let updatedItem
    try {
        updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    } catch (error) {
        console.error(error)
        return res.json({
            success: false,
            message: `There was an error on the server trying to find user.Item may not exist.`
        })
    }

    res.json({
        success: true,
        message: `Item has been updated.`,
        updatedItem
    })
})


// Delete Route
router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    } catch (error) {
        console.error(error)
        return res.json({
            success: false,
            message: `There was an error on the server trying to delete an item.`
        })
    }


    res.json({
        success: true,
        message: `Item has been deleted.`,
    })
})


module.exports = router
const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    property: String
})

const Item = mongoose.model('Item', schema)

module.exports = Item
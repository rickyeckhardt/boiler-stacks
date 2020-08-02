const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    property: String
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

const Item = mongoose.model('Item', schema)

module.exports = Item
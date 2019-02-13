var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let ProductSchema = Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    categoryId: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    unitsAvailable: {
        type: Number,
    },
})

let Product = module.exports = mongoose.model('Product', ProductSchema);
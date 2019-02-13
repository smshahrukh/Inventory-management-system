var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let CategorySchema = Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    // products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    products: {
        type: Array
    }
})

let Category = module.exports = mongoose.model('Category', CategorySchema);
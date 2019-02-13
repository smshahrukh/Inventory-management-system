const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const async = require("async");
const app = express();

// Connection URL
var url = 'mongodb://smshahrukh1:july2nd900@ds129625.mlab.com:29625/inventories_db';
mongoose.connect(url);
let db = mongoose.connection;

db.once('open', function(){
    console.log('Connected to MongoDB');
})

db.on('error', function(err){
    console.log(err);
})

app.use(express.json());

let Category = require('./categorySchema');

app.get('/api/categories', (req, res)=> {
    Category.find({}, (err, categories) => {
        if (err) throw err
        res.json({
            categories
        })
    })
});

app.post('/api/categories', (req, res) => {
    let newCategory = new Category({
        name: req.body.name,
        type: req.body.type
    });

    newCategory.save((err, category) => {
        if (err) throw err
        res.json(category)
    })
});


let Product = require('./ProductSchema');

app.get('/api/products', (req, res)=> {
    Product.find({}, (err, products) => {
        if (err) throw err
        res.json({
            products
        })
    })
});

app.post('/api/products', (req, res) => {    
    let newProduct = new Product({
        name: req.body.name,
        categoryId: req.body.categoryId,
        price: req.body.price,
        unitsAvailable: req.body.unitsAvailable || 0
    });

    newProduct.save((err, product) => {
        if (err) throw err
        /*
        // Use to insert Product into Category directly
        Category.findByIdAndUpdate(
            product.categoryId,
            { $push: { products: product } },
            {new: true},
            (err, category) => {
                if (err) res.status(404).send('Category not found')
                res.json(product)
            }
        )*/
        res.json(product)
    })
});

app.put('/api/products/:id', (req, res) => {
    const updatedProduct = req.body;
    Product.findByIdAndUpdate(
            req.params.id,
            updatedProduct,
            {new: true},
            (err, product) => {
                if (err) res.status(404).send('Product not found')
                res.json(product)
            }
        )
});

app.get('/api/inventories', (req, res) => {
    Category.find({}, (err, categories) => {
        if (err) res.status(404).send('No category found');
        categories.map(category => {
            Product.find({categoryId: category.id}, (err, products) => {
                category.products = products;
            })
        });
        res.json(categories)
    })
})

const port = process.env.PORT || 3400;
app.listen(port, () => console.log(`Listening to port ${port}`))


 const mongoose = require('mongoose')

 // creates a schema for the Books
 const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: String,
        required: true,
        lowercase: true
    },
    price: Number,
    published_date: Date,
 })

 // Makes the file become a model object
 module.exports = mongoose.model("",bookSchema)
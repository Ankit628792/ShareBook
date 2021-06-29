const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const bookSchema = new mongoose.Schema({
    bookId: {
        type: String,
    },
    userId: {
        type: String,
    },
    bookname: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    condition: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    bookShared: {
        type: Boolean
    },
    category: {
        type: String
    },
    image_url: {
        type: String
    }
})


// user: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'User',
//     required: true
// }



const Book = mongoose.model('BOOK', bookSchema)

module.exports = Book;
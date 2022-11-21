const mongoose = require('mongoose');

const userComment = new mongoose.Schema({
    userId: {
        type: String
    },
    fullname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
    },
    comment : {
        type: String,
        required: true
    },
})


const Comment = mongoose.model('COMMENT', userComment)

module.exports = Comment ;
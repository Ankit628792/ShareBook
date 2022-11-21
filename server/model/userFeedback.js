const mongoose = require('mongoose');

const userFeedback = new mongoose.Schema({
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
    feedback : {
        type: String,
        required: true
    },
})


const Feedback = mongoose.model('Feedback', userFeedback)

module.exports = Feedback ;
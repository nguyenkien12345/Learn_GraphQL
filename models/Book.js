const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    views: {
        type: Number,
        default: 0
    },
    authorId: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('books', BookSchema);

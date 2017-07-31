const mongoose = require('mongoose');

const CommentsSchema = mongoose.Schema({
    nickname: String,
    comment: String,
    timestamp: Date
});

module.exports = mongoose.model('Comments', CommentsSchema);
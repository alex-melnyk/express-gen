const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    photo: String,
    comment: String
});

module.exports = mongoose.model('Posts', PostsSchema);
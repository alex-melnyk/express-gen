var express = require('express');
var router = express.Router();
var multer = require('multer');

const {Posts} = require('../models');

var upload = multer({dest: 'public/uploads/'});

router.get('/', function (req, res, next) {
    Posts.find((err, posts) => {
        if (err) {
            res.error(500);
            return;
        }

        console.log(posts);

        res.render('upload_file', {
            posts
        });
    });
});

router.post('/', upload.single('image'), function (req, res, next) {
    new Posts({
        photo: req.file.filename,
        comment: "No body knows"
    }).save((err) => {
        if (err) {
            res.error(500);
            return;
        }

        res.redirect('/upload/');
    });

});

module.exports = router;

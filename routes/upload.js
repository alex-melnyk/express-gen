var express = require('express');
var router = express.Router();
var multer = require('multer');

var upload = multer({dest: 'public/uploads/'});

router.get('/', function (req, res, next) {
    res.render('upload_file');
});

router.post('/', upload.single('image'), function (req, res, next) {
    // res.render('upload_file');
    // next();
    res.redirect('/');
});

module.exports = router;

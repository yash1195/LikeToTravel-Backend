var express = require('express');
var router = express.Router();

// controllers
// var authenticationController = require('../../controllers/authentication/AuthenticationController');

/* GET users listing. */
// router.get('/foo', function(req, res, next) {
//
//     res.send('fooo');
//     // res.send(authenticationController.foo_bar(req, res));
// });

//
// /* GET home page. */
router.get('/foo', function(req, res, next) {
    res.render('index', { title: 'Like-To-Travel.it' });
});

module.exports = router;

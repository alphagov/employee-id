var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

// make radio-group button routes work

router.get('*', function (req, res, next) {
    // md = new MobileDetect(req.headers['user-agent']);
    // res.locals.userAgent = md

    var radioGroup = req.query['radio-group'];

    if (radioGroup) {
      res.redirect(radioGroup);
    } else {
      next()
    }

});

router.post('/id-options', function (req, res, next) {
    // md = new MobileDetect(req.headers['user-agent']);
    // res.locals.userAgent = md

    var idOption = req.session.data['other-id']

    if (idOption == 'none-of-the-above') {
      res.redirect("/v3/pre-interview/unverified");
    } else {
      res.redirect("/v3/pre-interview/3rd-cycle-matching");
    }

});


module.exports = router
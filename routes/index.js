var express = require('express');
var router = express.Router();
const {body} = require('express-validator');
const {validationResult} = require('express-validator');
const contactsRepo = require('../src/contactFileRepo');
const Contact = require('../src/Contact');

/* GET todos listing. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "My App!"});
});

/*GET contacts listing. */
router.get('/contact_list', function(req, res, next) {
  const data = contactsRepo.findAll();
  res.render('contact_list', {title: "All Contacts!", contacts: data, errors: null});
});


module.exports = router;

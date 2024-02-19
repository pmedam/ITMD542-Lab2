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

/* GET new contact. */
router.get('/contact_add',
body('firstName', 'First Name must not be empty.').notEmpty(),
body('lastName', 'Last Name must not be empty.').notEmpty(),
body('email', 'Email must not be empty.').notEmpty(),
function (req, res, next){
  const results = validationResult(req);

  if(!results.isEmpty()){
    res.render('contact_add', {title: "Add Contact", errors: results.array()});
  }
  else{
    contactsRepo.create(new Contact('', req.body.firstName, req.body.lastName, req.body.email, req.body.notes));
    res.direct('/contact_list');
  }
});

module.exports = router;

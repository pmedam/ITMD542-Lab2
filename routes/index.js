var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Add Contact' });
});

const contacts = [
   {
     contactID: 1,
     firstName: "John",
     lastName: "Doe",
     emailAddress: "john.doe@example.com",
     notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     dateTime: "2024-02-18 09:30 AM"
   },
   {
     contactID: 2,
     firstName: "Jane",
     lastName: "Smith",
     emailAddress: "jane.smith@example.com",
     notes: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     dateTime: "2024-02-17 02:45 PM"
   },
   {
     contactID: 3,
     firstName: "Michael",
     lastName: "Johnson",
     emailAddress: "michael.johnson@example.com",
     notes: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     dateTime: "2024-02-16 11:20 AM"
   }
 ];

/* GET contact_list page. */
router.get('/contact/list', function(req, res, next) {
  res.render('contact_list', { title: 'Add Contact', contacts: contacts });
});
module.exports = router;

var express = require('express');
var router = express.Router();
const CardModal = require('../models/CardData')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.post('/card', function(req, res, next) {
  console.log(req.body);
  var userDetails = new CardModal({
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    dob: req.body.dob,
    totalLimit: req.body.totalLimit,
    avLimit: req.body.avLimit,
    cardNumber: req.body.cardNumber,
    holderName: req.body.holderName,
    exDate: req.body.expiry,
    cvv: req.body.cvv
  });
   
  userDetails.save();
  // CardModal.insert({
  //   name: req.body.name,
  //   mobile: req.body.mobile,
  //   email: req.body.email,
  //   dob: req.body.dob,
  //   totalLimit: req.body.totalLimit,
  //   avLimit: req.body.avLimit,
  //   cardNumber: req.body.cardNumber,
  //   holderName: req.body.holderName,
  //   exDate: req.body.expiry,
  //   cvv: req.body.cvv
  // }).save()
  res.render('success')
});

module.exports = router;

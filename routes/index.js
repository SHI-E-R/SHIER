var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/show', async (req, res, next) => {
  console.log(req.session.user)
  try {
    console.log(req.session.user)
    let result = await require('../services/user').show();
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

module.exports = router;
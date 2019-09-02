var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/aa', function (req, res, next) {
  res.send('ooooooooo')
});

router.get('/show', async (req, res, next) => {
  console.log(req.session.user)
  res.send('hhhhhhhhhhhhh')
  // try {
  //   console.log(req.session.user)
  //   let result = await require('../services/user').show();
  //   // res.send(result);
  //   res.send('hhhhh');
  // } catch (e) {
  //   res.send(e);
  // }
})

module.exports = router;
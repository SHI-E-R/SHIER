var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/sss', function (req, res, next) {
  res.send('不是502 502')
});

router.get('/show', async (req, res, next) => {
  try {
    let result = await require('../service/user').show();
    res.send(result);
  } catch (e) {
    res.send('出错了没有try到');
  }
})

router.get('/test', async (req, res, next) => {
  try {
    let result = await require('../service/user').test();
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

module.exports = router;
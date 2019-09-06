var express = require('express');
var router = express.Router();
var api = require('../service/user')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/show', async (req, res, next) => {
  try {
    let result = await api.show();
    res.send(result);
  } catch (e) {
    res.send('出错了没有try到');
  }
})

router.get('/addArticle', async (req, res, next) => {
  try {
    const param = req.query
    console.log(param)
    let result = await api.addArticle(param);
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

module.exports = router;
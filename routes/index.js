var express = require('express');
var router = express.Router();
var api = require('../service/user')
var add = require('../service/article')

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

router.post('/addArticle', async (req, res, next) => {
  try {
    const param = req.params
    console.log(param)
    let result = await add.addArticle(param.title, param.remake);
    res.send(result);
  } catch (e) {
    res.send('出错了没有try到');
  }
})

module.exports = router;
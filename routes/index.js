var express = require('express');
var router = express.Router();
var app = express();


//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/* GET home page. */
app.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

app.get('/show', async (req, res, next) => {
  try {
    let result = await require('../service/user').show();
    res.send(result);
  } catch (e) {
    res.send('出错了没有try到');
  }
})

app.get('/test', async (req, res, next) => {
  try {
    let result = await require('../service/user').test();
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

module.exports = router;
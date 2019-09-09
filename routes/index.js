var express = require('express');
var router = express.Router();
var api = require('../service/user')
let qiniu = require('qiniu'); // 需要加载qiniu模块的
const accessKey = 'AeJ3AwFOKhGdPxsRd-RL4wud3aq7at56flGi-GbK';
const secretKey = 'C2NmkNdGOcx5Qb22BcO2ys9U5pucnvrGinDCJ0oL';
const bucket = 'shier';


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/token', async(ctx, next)=> {
  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  let options = {
      scope: bucket,
      expires: 3600 * 24
  };
  let putPolicy =  new qiniu.rs.PutPolicy(options);
  let uploadToken= putPolicy.uploadToken(mac);
  if (uploadToken) {
      ctx.body = Code('re_success', uploadToken)
  } else {
      ctx.body = Code('re_error')
  }
})

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

router.get('/selectArticle', async (req, res, next) => {
  try {
    let result = await api.selectArticle();
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

router.get('/deleteArticle', async (req, res, next) => {
  try {
    const param = req.query
    console.log(param)
    let result = await api.deleteArticle(param);
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

router.get('/updateArticle', async (req, res, next) => {
  try {
    const param = req.query
    console.log(param)
    let result = await api.updateArticle(param);
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

module.exports = router;
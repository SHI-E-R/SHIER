var express = require('express');
var router = express.Router();
var app = express();
var connection = require('../config/db') 

connection.connect((err) => {
    if (err) {
        console.log(err, "数据库连接失败");
        return;
    }
    console.log('数据库连接成功');

    app.listen(port, function (err) {
        if (err) {
            console.error('err:', err);
        } else {
            console.info(`===> api server is running at localhost:3306`)
        }
    });
});

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

let show = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from user', (err, rows) => {
            if (err) {
                reject(err);
                console.log('出错了哦');
            }
            console.log(row,'这是结果');
            resolve('没有结果啊');
        })
    })
}

// let test = () => {
//     return new Promise((resolve, reject) => {
//         console.log('测试导入问题');
//         resolve('test测试成功')
//     })
// }
let test = () => {
    return('test测试成功')
}

exports.show = show
exports.test = test
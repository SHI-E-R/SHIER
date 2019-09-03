var express = require('express');
var router = express.Router();
const db = require('../config/db')

var mysql = require('mysql');
pool.connect((err) => {
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

let show = () => {
    return new Promise((resolve, reject) => {
        pool.query('select * from user', (err, rows) => {
            if (err) {
                reject(err);
                console.log('出错了哦');
            }
            console.log(row,'这是结果');
            resolve(rows);
        })
    })
}

let test = () => {
    return new Promise((resolve, reject) => {
        console.log('测试导入问题');
    })
}

exports.show = show
exports.test = test
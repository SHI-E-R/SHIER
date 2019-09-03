var express = require('express');
var router = express.Router();
const db = require('../config/db')
let show = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from user', (err, rows) => {
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
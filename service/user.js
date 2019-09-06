var express = require('express');
var router = express.Router();
var connection = require('../config/db') 
var conn = connection.connection

conn.connect();

let show = () => {
    return new Promise((resolve, reject) => {
        conn.query('select * from user', (err, rows) => {
            if (err) {
                reject('出错了哦');
            }
            resolve(rows)
        })
    })
}

// 新增
let addArticle = (params) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO article(title,remake) VALUES ('${params.title}', '${params.remake}')`, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    })
}

// 查询
let selectArticle = () => {
    return new Promise((resolve, reject) => {
        conn.query(`select * from article`, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    })
}

// 删除
let deleteArticle = (params) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM article WHERE id = ${params.id}`
        conn.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    })
}

// 改
let updateArticle = (params) => {
    return new Promise((resolve, reject) => {
        let sql = `update article set title = '${params.title}', remake = '${params.remake}' where id = '${params.id}'`
        conn.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows)
        })
    })
}


module.exports = {
    show,
    addArticle,
    selectArticle,
    deleteArticle,
    updateArticle
}
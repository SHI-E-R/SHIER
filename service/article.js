var express = require('express');
var router = express.Router();
var connection = require('../config/db') 
var conn = connection.connection

conn.connect();

let addArticle = (title,remake) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO article(title,remake) VALUES (${title},${remake})`, (err, rows) => {
            if (err) {
                reject('出错了哦');
            }
            resolve(rows)
        })
    })
}

exports.show = show
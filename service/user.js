var express = require('express');
var router = express.Router();
const db = require('../config/db')
let show = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from user', (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        })
    })
}

exports.show = show
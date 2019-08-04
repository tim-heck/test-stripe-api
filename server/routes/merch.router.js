const express = require('express');
const router = express.Router();
// const axios = require('axios');
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM products;`;
    pool.query(sqlText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})
    

module.exports = router;
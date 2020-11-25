process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const {
    Pool
} = require('pg')
const ejs = require('ejs')
const express = require('express')

function getConnection() {
    const connectionString = process.env.DATABASE_URL || 'postgres://dfeehcybpqcick:dd661b5690a15a9bdd681406a867096d2edbf51b5334774200a7feeb6b438c09@ec2-34-192-122-0.compute-1.amazonaws.com:5432/dbt76nt3eombn5?ssl=true';
    const pool = new Pool({
        connectionString: connectionString
    });
    return pool;
}

function getNavData(callback) {
    connPool = getConnection();
    var sql = 'SELECT * FROM twitter_accounts;';
    var data;
    connPool.query(sql, callback);
}

exports.renderNavbar = function (req, res) {
    getNavData(function (err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err);
            res.render('navData', err)
        } else {
            console.log(result.rows[0].ta_id);
            console.log(result.rows[0].ta_screen_name);
            res.status(200).render('pages/index', {navData: result.rows});
        }
    });
};
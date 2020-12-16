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
    connPool.query(sql, callback);
}

function getProfileData(id, callback) {
    console.log('getProfileData Called');
    connPool = getConnection();
    var sql = 'SELECT ta_url_name, ta_screen_name FROM twitter_accounts WHERE ta_id = ' + id + ';';
    console.log('about to send query');
    connPool.query(sql, callback);
}

function getHashData(callback) {
    console.log('getHashData Called');
    connPool = getConnection();
    var sql = 'SELECT * FROM hashtags;';
    connPool.query(sql, callback);
}

exports.renderNavbar = function (req, res) {
    getNavData(function (err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err);
            res.render('navData', err)
        } else {
            getHashData(function (err, hashResult) {
                if (err) {
                    console.log("Error in query: ")
                    console.log(err);
                    res.render('navData', err)
                } else {
                    console.log(result.rows[0].ta_id);
                    console.log(result.rows[0].ta_screen_name);
                    console.log(hashResult.rows[0].hashtag_id);
                    console.log(hashResult.rows[0].hashtag_name);
                    res.status(200).render('pages/index', {
                        navData: [result.rows, hashResult.rows]
                    });
                }
            });
        }
    });
};

exports.sendProfileData = function (res, id) {
    console.log('sendProfileData Called')
    getProfileData(id, function (err, result) {
        console.log('getProfileData Callback Called');
        if (err) {
            console.log("Error in query: ")
            console.log(err);
            res.status(500).json(err);
        } else {
            res.status(200).json(result.rows[0]);
        }
    });
}
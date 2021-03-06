const config = require('../config');
const MongoClient = require('mongodb').MongoClient;
const url = config.db;

function insert(entry) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
            if (err) return reject(err);
            const dbo = db.db(config.dbName);
            dbo
            .collection('location')
            .insertOne(entry, (err) => {
                db.close();
                if (err) return reject(err);
                return resolve(entry._id);
            });
        });
    });
}

function insertMock() {
    return new Promise((resolve) => {
        resolve('entry id');
    });
}

module.exports.insert = insert; // process.env.NODE_ENV === 'production' ? insert : insertMock;

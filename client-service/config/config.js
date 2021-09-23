const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': '34.68.61.230',
    'port': 5432,
    'database': 'Junta',
    'user': 'postgres',
    'password': 'Jasaa2021*'
}

const db = pgp(databaseConfig);

module.exports = db 
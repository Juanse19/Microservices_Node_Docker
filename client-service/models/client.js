const db = require('../config/config');

const Client = {};

Client.getAll = () => {
    const sql = `
    SELECT 
        *
    FROM
    clientes
    `;

    return db.manyOrNone(sql);
}

module.exports = Client;
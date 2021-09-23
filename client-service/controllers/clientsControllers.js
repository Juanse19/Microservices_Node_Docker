const Client = require('../models/client');

module.exports = {

    async getAll(req, res, next){
        try {
            const data = await Client.getAll();
            console.log(`Clients: ${data}`);
            return res.status(201).json(data);
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener los Clientes'
            });
        }
    },

}
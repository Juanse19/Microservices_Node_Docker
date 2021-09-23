const ClientsControllers = require('../controllers/clientsControllers');

module.exports = (app) => {

    //Traer datos
    app.get('/api/clients', ClientsControllers.getAll);


}
const UsersControllers = require('../controllers/usersController');

module.exports = (app) => {

    //Traer datos
    app.get('/api/users/getAll', UsersControllers.getAll);

    //Guardar datos
    app.post('/api/users/create', UsersControllers.register);

    //Login
    app.post('/api/users/login', UsersControllers.login);

}
const usersController = require('../controllers/usersController');

module.exports = (app) => {
  //# create a user
  app.post('/api/users', usersController.create);

  //#get the list of user
  app.get('/api/users', usersController.fetch);

  //#get a single user
  app.get('/api/users/:id', usersController.get);

  //#update a user
  app.put('/api/users/:id', usersController.update);

  //#delete a user
  app.delete('/api/users/:id', usersController.delete);
};

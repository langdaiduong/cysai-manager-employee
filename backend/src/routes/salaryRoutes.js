const salariesController = require('../controllers/salariesController');

module.exports = (app) => {
  //# create a salary
  app.post('/api/salaries', salariesController.create);

  //#get the list of salary
  app.get('/api/salaries', salariesController.fetch);

  //#get a single salary
  app.get('/api/salaries/:id', salariesController.get);

  //#update a salary
  app.put('/api/salaries/:id', salariesController.update);

  //#delete a salary
  app.delete('/api/salaries/:id', salariesController.delete);
};

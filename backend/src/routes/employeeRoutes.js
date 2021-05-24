const employeesController = require('../controllers/employeesController');

module.exports = (app) => {
  //# create a employee
  app.post('/api/employees', employeesController.create);

  //#get the list of employee
  app.get('/api/employees', employeesController.fetch);

  //#get a single employee
  app.get('/api/employees/:id', employeesController.get);

  //#update a employee
  app.put('/api/employees/:id', employeesController.update);

  //#delete a employee
  app.delete('/api/employees/:id', employeesController.delete);
};

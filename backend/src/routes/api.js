const express = require("express");
const router = express.Router();
const AuthMiddleWare = require("../middleware/AuthMiddleware");
const AuthController = require("../controllers/AuthController");

const employeesController = require('../controllers/employeesController');
const salariesController = require('../controllers/salariesController');
const usersController = require('../controllers/usersController');

/**
 * Init all APIs on your application
 * @param {*} app from express
 */
let initAPIs = (app) => {
  router.post("/login", AuthController.login);
  router.post("/refresh-token", AuthController.refreshToken);
  // Sử dụng authMiddleware.isAuth trước những api cần xác thực
  //router.use(AuthMiddleWare.isAuth);
  // List Protect APIs:
  //list router: Employee
  router.post('/api/employees', employeesController.create);
  //#get the list of employee
  router.get('/api/employees', employeesController.fetch);
  //#get a single employee
  router.get('/api/employees/:id', employeesController.get);
  //#update a employee
  router.put('/api/employees/:id', employeesController.update);
  //#delete a employee
  router.delete('/api/employees/:id', employeesController.delete);

  //list router: salaries
  router.post('/api/salaries', salariesController.create);
  //#get the list of salary
  router.get('/api/salaries', salariesController.fetch);
  //#get a single salary
  router.get('/api/salaries/:id', salariesController.get);
  //#update a salary
  router.put('/api/salaries/:id', salariesController.update);
  //#delete a salary
  router.delete('/api/salaries/:id', salariesController.delete);

  //list router: users
  router.post('/api/users', usersController.create);
  //#get the list of user
  router.get('/api/users', usersController.fetch);
  //#get a single user
  router.get('/api/users/:id', usersController.get);
  //#update a user
  router.put('/api/users/:id', usersController.update);
  //#delete a user
  router.delete('/api/users/:id', usersController.delete);

  return app.use("/", router);
}
module.exports = initAPIs;
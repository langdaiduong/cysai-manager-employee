const express = require("express");
const router = express.Router();
const AuthMiddleWare = require("../middleware/AuthMiddleware");
const AuthController = require("../controllers/AuthController");

const employeesController = require("../controllers/employeesController");
const salariesController = require("../controllers/salariesController");
const usersController = require("../controllers/usersController");
const votesController = require("../controllers/votesController");
const timekeepingController = require("../controllers/timekeepingController");

/**
 * Init all APIs on your application
 * @param {*} app from express
 */
let initAPIs = (app) => {
  router.post("/login", AuthController.login);
  // router.post("/login", async (ctx) => {
  //   const { username, password } = ctx.request.body;

  //   const user = await getOneByUsername(username);

  //   if (!user || user.error) {
  //     ctx.throw(401, user ? user.error : "Invalid credentials.");
  //     return;
  //   }

  //   if (!bcrypt.compareSync(password, user.password)) {
  //     ctx.throw(401, "Invalid credentials.");
  //     return;
  //   }

  //   const token = jwt.sign({ username }, config.security.jwt.secretkey, {
  //     expiresIn: config.security.jwt.expiration,
  //   });

  //   ctx.body = { token };
  // });
  router.post("/register", AuthController.register)
  router.post("/refresh-token", AuthController.refreshToken);
  // Sử dụng authMiddleware.isAuth trước những api cần xác thực
  //router.use(AuthMiddleWare.isAuth);
  // List Protect APIs:
  //list router: Employee
  router.post("/api/employees", employeesController.create);
  //#get the list of employee
  router.get("/api/employees", employeesController.fetch);
  //#get a single employee
  router.get("/api/employees/:id", employeesController.get);
  //#update a employee
  router.put("/api/employees/:id", employeesController.update);
  //#delete a employee
  router.delete("/api/employees/:id", employeesController.delete);

  //list router: salaries
  router.post("/api/salaries", salariesController.create);
  //#get the list of salary
  router.get("/api/salaries", salariesController.fetch);
  //#get a single salary
  router.get("/api/salaries/:id", salariesController.get);
  //#update a salary
  router.put("/api/salaries/:id", salariesController.update);
  //#delete a salary
  router.delete("/api/salaries/:id", salariesController.delete);

  //list router: users
  router.post("/api/users", usersController.create);
  //#get the list of user
  router.get("/api/users", usersController.fetch);
  //#get a single user
  router.get("/api/users/:id", usersController.get);
  //#update a user
  router.put("/api/users/:id", usersController.update);
  //#delete a user
  router.delete("/api/users/:id", usersController.delete);

  //list router: votes
  router.post("/api/votes", votesController.create);
  //#get the list of user
  router.get("/api/votes", votesController.fetch);
  //#get a single user
  router.get("/api/votes/:id", votesController.get);
  //#update a user
  router.put("/api/votes/:id", votesController.update);
  //#delete a user
  router.delete("/api/votes/:id", votesController.delete);

  //list router: timekeeping
  router.post("/api/timekeeping", timekeepingController.create);
  //#get the list of user
  router.get("/api/timekeeping", timekeepingController.fetch);
  //#get a single user
  router.get("/api/timekeeping/:id", timekeepingController.get);
  //#update a user
  router.put("/api/timekeeping/:id", timekeepingController.update);
  //#delete a user
  router.delete("/api/timekeeping/:id", timekeepingController.delete);
  return app.use("/", router);
};
module.exports = initAPIs;

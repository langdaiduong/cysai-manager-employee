const Employee = require("../models/employees");
module.exports = {
  //# create a employee
  create: async (request, reply) => {
    try {
      const employee = request.body;
      console.log(employee);
      const newEmployee = await Employee.create(employee);
      console.log(newEmployee);
      reply.status(201).json(newEmployee);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#get the list of employee
  fetch: async (request, reply) => {
    const filter = request.query.filter
    console.log(filter);
    const range = request.query.range
      .replace("[", "")
      .replace("]", "")
      .split(",");
    const sort = request.query.sort
      .replace("[", "")
      .replace("]", "")
      .split(",");
    try {
      const employees = await Employee.find({})
        .sort({ [sort[0].replace(/"/g, "")]: sort[1] === '"ASC"' ? -1 : 1 })
        .skip(+range[0])
        .limit(+range[1] - +range[0]);
      const total = await Employee.countDocuments({});
      reply.header("Content-Range", `employees 0-${total}/${total}`);
      reply.status(200).json(employees);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#get a single employee
  get: async (request, reply) => {
    try {
      const employeeId = request.params.id;
      const emloyee = await Employee.findById(employeeId);
      reply.status(200).json(emloyee);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#update a employee
  update: async (request, reply) => {
    try {
      const employeeId = request.params.id;
      const updates = request.body;
      await Employee.findByIdAndUpdate(employeeId, updates);
      const employeeToUpdate = await Employee.findById(employeeId);
      reply.status(200).json({ data: employeeToUpdate });
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#delete a employee
  delete: async (request, reply) => {
    try {
      const employeeId = request.params.id;
      const employeeToDelete = await Employee.findById(employeeId);
      await Employee.findByIdAndDelete(employeeId);
      reply.status(200).json({ data: employeeToDelete });
    } catch (e) {
      reply.status(500).json(e);
    }
  },
};

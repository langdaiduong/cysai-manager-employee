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
    if (request.query.range === undefined) {
      console.log("Did not find any range");
      return;
    }
    const total = await Employee.countDocuments({});
    const range = request.query.range
      .replace("[", "")
      .replace("]", "")
      .split(",");
    const sort = request.query.sort
      .replace("[", "")
      .replace("]", "")
      .split(",");
    try {
      //set header content-range
      reply.header("Content-Range", `employees 0-${total}/${total}`);

      //load list employee when filter = {}
      if (request.query.filter === "{}") {
        const employees = await Employee.find({})
          .sort({ [sort[0].replace(/"/g, "")]: sort[1] === '"ASC"' ? -1 : 1 })
          .skip(+range[0])
          .limit(+range[1] - +range[0]);
        reply.status(200).json(employees);
      } else {
        const filter = request.query.filter
          .replace("{", "")
          .replace("}", "")
          .split(":");
        //search
        if (filter[0] === '"q"') {
          // console.log(filter[1]);
          const employees_search = await Employee.find({
            "name": { $regex: ".*" + filter[1].replace(/"/g, "") + ".*" },
          })
            .skip(+range[0])
            .limit(+range[1] - +range[0]);
          // console.log(employees_search);
          reply.status(200).json(employees_search);
        }
        //filter
        if (filter[0] === '"name"') {
          const employees = await Employee.findById(filter[1].replace(/"/g, ""))
            .skip(+range[0])
            .limit(+range[1] - +range[0]);
          reply.status(200).json([employees]);
        }
      }
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

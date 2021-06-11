const Salary = require('../models/salaries');

module.exports = {
  //# create a salary
  create: async (request, reply) => {

    try {
      const salary = request.body;
      const newSalary = await Salary.create(salary);
      reply.status(201).json(newSalary);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#get the list of salary
  fetch: async (request, reply) => {
    if (request.query.range === undefined) {
      console.log("Did not find any range");
      return;
    }
    const total = await Salary.countDocuments({});
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
        const salary = await Salary.find({})
          .sort({ [sort[0].replace(/"/g, "")]: sort[1] === '"ASC"' ? -1 : 1 })
          .skip(+range[0])
          .limit(+range[1] - +range[0]);
        reply.status(200).json(salary);
      } else {
        const filter = request.query.filter
          .replace("{", "")
          .replace("}", "")
          .split(":");
        //search
        if (filter[0] === '"q"') {
          // console.log(filter[1]);
          const salary_search = await Salary.find({
            "name": { $regex: ".*" + filter[1].replace(/"/g, "") + ".*" },
          })
            .skip(+range[0])
            .limit(+range[1] - +range[0]);
          // console.log(employees_search);
          reply.status(200).json(salary_search);
        }
        //filter
        if (filter[0] === '"name"') {
          const salary = await Salary.findById(filter[1].replace(/"/g, ""))
            .skip(+range[0])
            .limit(+range[1] - +range[0]);
          reply.status(200).json([salary]);
        }
      }
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#get a single salary
  get: async (request, reply) => {
    try {
      const salaryId = request.params.id;
      const salary = await Salary.findById(salaryId);
      reply.status(200).json(salary);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#update a salary
  update: async (request, reply) => {
    try {
      const salaryId = request.params.id;
      const updates = request.body;
      await Salary.findByIdAndUpdate(salaryId, updates);
      const salaryToUpdate = await Salary.findById(salaryId);
      reply.status(200).json({ data: salaryToUpdate });
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#delete a salary
  delete: async (request, reply) => {
    try {
      const salaryId = request.params.id;
      const salaryToDelete = await Salary.findById(salaryId);
      await Salary.findByIdAndDelete(salaryId);
      reply.status(200).json({ data: salaryToDelete });
    } catch (e) {
      reply.status(500).json(e);
    }
  },
};

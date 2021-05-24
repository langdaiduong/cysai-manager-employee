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
    const filter = request.query.filter
      .replace("{", "")
      .replace("}", "")
      .split(",");
    const range = request.query.range
      .replace("[", "")
      .replace("]", "")
      .split(",");
    const sort = request.query.sort
      .replace("[", "")
      .replace("]", "")
      .split(",");    
    try {
      const salaries = await Salary.find({})
        .sort({ [sort[0].replace(/"/g, "")]: sort[1] === '"ASC"' ? -1 : 1 })
        .skip(+range[0])
        .limit(+range[1] - +range[0]);
      const total = await Salary.countDocuments({});
      reply.header("Content-Range", `salaries 0-${total}/${total}`);
      reply.status(200).json(salaries);
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

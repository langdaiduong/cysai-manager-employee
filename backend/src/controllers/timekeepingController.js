const TimeKeeping = require("../models/timekeeping");
const queryString = require("query-string");

module.exports = {
  //# create a vote
  create: async (request, reply) => {
    try {
      const timekeeping = request.body;
      console.log(timekeeping);
      const newTimeKeeping = await TimeKeeping.create(timekeeping);
      console.log(newTimeKeeping);
      reply.status(201).json(newTimeKeeping);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#get the list of vote
  fetch: async (request, reply) => {
    if (request.query.range === undefined) {
      console.log("Did not find any range");
      return;
    }
    const range = request.query.range
      .replace("[", "")
      .replace("]", "")
      .split(",");
    const sort = request.query.sort
      .replace("[", "")
      .replace("]", "")
      .split(",");
    try {
      if (request.query.filter === "{}") {
        const timekeeping = await TimeKeeping.find({})
          .sort({ [sort[0].replace(/"/g, "")]: sort[1] === '"ASC"' ? -1 : 1 })
          .skip(+range[0])
          .limit(+range[1] - +range[0]);
        const total = await TimeKeeping.countDocuments({});
        reply.header("Content-Range", `users 0-${total}/${total}`);
        reply.status(200).json(timekeeping);
      } else {
        const filter = request.query.filter
          .replace("{", "")
          .replace("}", "")
          .split(":");
        const users = await TimeKeeping.findById(filter[1].replace(/"/g, ""))
          .skip(0)
          .limit(1);
        reply.header("Content-Range", `users 0-${1}/${1}`);
        reply.status(200).json([timekeeping]);
      }
    } catch (e) {
      console.log(e);
      reply.status(500).json(e);
    }
  },

  //#get a single vote
  get: async (request, reply) => {
    try {
      const timekeepingId = request.params.id;
      const timekeeping = await TimeKeeping.findById(timekeepingId);
      reply.status(200).json(timekeeping);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#update a vote
  update: async (request, reply) => {
    try {
      const timekeepingId = request.params.id;
      const updates = request.body;
      await TimeKeeping.findByIdAndUpdate(timekeepingId, updates);
      const timekeepingToUpdate = await TimeKeeping.findById(timekeepingId);
      reply.status(200).json({ data: timekeepingToUpdate });
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#delete a vote
  delete: async (request, reply) => {
    try {
      const timekeepingId = request.params.id;
      const timekeepingToDelete = await TimeKeeping.findById(timekeepingId);
      await TimeKeeping.findByIdAndDelete(timekeepingId);
      reply.status(200).json({ data: timekeepingToDelete });
    } catch (e) {
      reply.status(500).json(e);
    }
  },
};

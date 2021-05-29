const User = require("../models/users");
const queryString = require("query-string");

module.exports = {
  //# create a user
  create: async (request, reply) => {
    try {
      const user = request.body;
      console.log(user);
      const newUser = await User.create(user);
      console.log(newUser);
      reply.status(201).json(newUser);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#get the list of user
  fetch: async (request, reply) => {
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
        const users = await User.find({})
          .sort({ [sort[0].replace(/"/g, "")]: sort[1] === '"ASC"' ? -1 : 1 })
          .skip(+range[0])
          .limit(+range[1] - +range[0]);
        const total = await User.countDocuments({});
        reply.header("Content-Range", `users 0-${total}/${total}`);
        reply.status(200).json(users);
      } else {
        const filter = request.query.filter
          .replace("{", "")
          .replace("}", "")
          .split(":");
        const users = await User.findById(filter[1].replace(/"/g, ""))
          .skip(0)
          .limit(1);
        reply.header("Content-Range", `users 0-${1}/${1}`);
        reply.status(200).json([users]);
      }
    } catch (e) {
      console.log(e);
      reply.status(500).json(e);
    }
  },

  //#get a single user
  get: async (request, reply) => {
    try {
      const userId = request.params.id;
      const user = await User.findById(userId);
      reply.status(200).json(user);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#update a user
  update: async (request, reply) => {
    try {
      const userId = request.params.id;
      const updates = request.body;
      await User.findByIdAndUpdate(userId, updates);
      const userToUpdate = await User.findById(userId);
      reply.status(200).json({ data: userToUpdate });
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#delete a user
  delete: async (request, reply) => {
    try {
      const userId = request.params.id;
      const userToDelete = await User.findById(userId);
      await User.findByIdAndDelete(userId);
      reply.status(200).json({ data: userToDelete });
    } catch (e) {
      reply.status(500).json(e);
    }
  },
};

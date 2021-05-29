const Vote = require("../models/votes");
const queryString = require("query-string");

module.exports = {
  //# create a vote
  create: async (request, reply) => {
    try {
      const vote = request.body;
      console.log(vote);
      const newVote = await Vote.create(vote);
      console.log(newVote);
      reply.status(201).json(newVote);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#get the list of vote
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
      const votes = await Vote.find({})
        .sort({ [sort[0].replace(/"/g, "")]: sort[1] === '"ASC"' ? -1 : 1 })
        .skip(+range[0])
        .limit(+range[1] - +range[0]);
      const total = await Vote.countDocuments({});
      reply.header("Content-Range", `votes 0-${total}/${total}`);
      reply.status(200).json(votes);
    } catch (e) {
      console.log(e);
      reply.status(500).json(e);
    }
  },

  //#get a single vote
  get: async (request, reply) => {
    try {
      const voteId = request.params.id;
      const vote = await Vote.findById(voteId);
      reply.status(200).json(vote);
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#update a vote
  update: async (request, reply) => {
    try {
      const voteId = request.params.id;
      const updates = request.body;
      await Vote.findByIdAndUpdate(voteId, updates);
      const voteToUpdate = await Vote.findById(voteId);
      reply.status(200).json({ data: voteToUpdate });
    } catch (e) {
      reply.status(500).json(e);
    }
  },

  //#delete a vote
  delete: async (request, reply) => {
    try {
      const voteId = request.params.id;
      const voteToDelete = await Vote.findById(voteId);
      await Vote.findByIdAndDelete(voteId);
      reply.status(200).json({ data: voteToDelete });
    } catch (e) {
      reply.status(500).json(e);
    }
  },
};

const mongoose = require('mongoose');
const { Schema } = mongoose;

const votesSchema = new Schema({
  fullname: { type: String, required: true },
  kpi: { type: String, required: true },
  probationary_vote: { type: String, required: true },
  promotion_vote:{ type: String, required: true },
  personal_development: { type: String, required: true },
  bonus: { type: String, required: true },
  discipline: { type: String, required: true },
  employees_vote:{ type: String, required: true },
  created_at: { type: Date }
});

const Votes = mongoose.model('votes', votesSchema);

module.exports = Votes;

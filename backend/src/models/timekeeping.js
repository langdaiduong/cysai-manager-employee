const mongoose = require('mongoose');
const { Schema } = mongoose;

const timekeepingSchema = new Schema({
  fullname: { type: String, required: true },
  position: { type: String, required: true },
  workdays: { type: Number, required: true },
  unpaid_leave:{ type: String, required: true },
  holidays: { type: Number, required: true },
  checkin: { type: Number, required: true },
  overtime: { type: Number, required: true },
  notes:{ type: String, required: true },
  created_at: { type: Date }
});

const TimeKeeping = mongoose.model('timekeeping', timekeepingSchema);

module.exports = TimeKeeping;

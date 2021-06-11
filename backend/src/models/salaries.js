const mongoose = require('mongoose');
const { Schema } = mongoose;

const salarySchema = new Schema({
  fullname: { type: String, required: true },
  stk: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  allowance: { type: String, required: true },
  insurrance:{
    BHYT:{ type: String, required: true },
    BHXH:{ type: String, required: true },
    BHTN:{ type: String, required: true },
  },
  tax_personal: { type: String, required: true },
  salary_sum: { type: Number, required: true },  
  created_at: { type: Date }
});

const Salaries = mongoose.model('salaries', salarySchema);

module.exports = Salaries;

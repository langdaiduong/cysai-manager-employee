const mongoose = require("mongoose");
const { Schema } = mongoose;
// const autoIncrement = require('mongoose-auto-increment');

const employeeSchema = new Schema({
  name: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  position: { type: String, required: true },
  level: { type: String, required: true },
  date_of_joining: { type: Date, required: true },
});

// var connection = mongoose.createConnection(process.env.MONGOURL);
// autoIncrement.initialize(connection);
// employeeSchema.plugin(autoIncrement.plugin, 'employees');

const Employees = mongoose.model('employees', employeeSchema);

module.exports = Employees;
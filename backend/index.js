require('dotenv').config();
var path = require('path');
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const initAPIs = require("./src/routes/api");

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const mongoose = require('mongoose');


const employeeRoutes = require('./src/routes/employeeRoutes');
const userRoutes = require('./src/routes/userRoutes');
const salaryRoutes = require('./src/routes/salaryRoutes');

try {
  mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.error(e);
}

// app.addHook('preHandler', ContentRangeHook);

app.use(express.json());

// employeeRoutes(app);
// userRoutes(app);
// salaryRoutes(app);

initAPIs(app);
// lien ket voi frontend
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

require('dotenv').config();
var path = require('path');
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const initAPIs = require("./src/routes/api");
const  cors = require('cors'); 

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

app.use(cors());
initAPIs(app);

app.use(express.json());
// lien ket voi frontend
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
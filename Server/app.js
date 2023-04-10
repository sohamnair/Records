const express = require('express');
const app = express();
const configRoutes = require('./server');
const cors = require('cors');

app.use(express.json());

app.use(cors());

// app.use(express.urlencoded({ extended: false }));

// let allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Headers', "*");
//   next();
// }
// app.use(allowCrossDomain);

configRoutes(app);

app.listen(3001, () => {
  console.log('The database is running on http://localhost:3001');
});
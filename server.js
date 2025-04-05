const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());

require('./db');
app.use('/api', routes);

app.listen(8888, () => {
  console.log('app is running @http://localhost:8888');
});

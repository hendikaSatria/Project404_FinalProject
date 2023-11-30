const express = require('express');
const cors = require('cors')
const router = require('./routes/index');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});

const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const app = express();

app.use(cors()); // Letakkan ini di sini

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  optionsSuccessStatus: 200
}));

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});
  
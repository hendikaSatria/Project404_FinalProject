const express = require("express");
const router = require("./routes/index");
const userAuthRoutes = require('./routes/userAuthenticationRoutes');
const app = express();

app.use(express.json());

app.use(router);
app.use('/userauth', userAuthRoutes);

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000 ");
});

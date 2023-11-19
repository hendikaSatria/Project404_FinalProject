const express = require("express");
const router = require("./routes/index");
const app = express();

app.use(router);

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000 ");
});

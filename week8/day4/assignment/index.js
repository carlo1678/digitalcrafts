const express = require("express");
const cors = require("cors");
const app = express();
const Sequelize = require("sequelize");
const port = process.env.PORT || 3100;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

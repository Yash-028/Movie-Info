const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config({ path: "./config.env" });
require("./db/conn.js");
app.use(require("./routes/auth.js.js"));

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(process.env.PORT, () => {
  console.log("server on ate port 3001");
});

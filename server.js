const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { db } = require("./models/workout");
const PORT = process.env.PORT || 3000;

//const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

app.use(require("./routes/api"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
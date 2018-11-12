const path = require("path");
const express = require("express");
const router = require("./routes");

//	Instantiate an App
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../_client/static/")));
app.use("/", router);

//  Initialize a DB connection
const db = require("./db/connection");

module.exports = app;

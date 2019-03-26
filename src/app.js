var express = require("express");
var app = express();
var db = require("./db");

var UserController = require("./User/UserController");
app.use("/users", UserController);

module.exports = app;
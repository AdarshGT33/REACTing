var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { resource } = require('../app');

router.get('/', function(req, res){
  res.cookie("name", "ram");
  res.render("index");
});

router.get("/check", function(req, res){
  console.log(req.cookies);
  res.send("check kro console");
})

router.get("/delete", function(req, res){
  res.clearCookie("name");
  res.send("clear ho gyi");
})

module.exports = router;

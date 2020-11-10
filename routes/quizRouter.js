const Router = require("express").Router();
const db = require("../models");

Router.get("/", function(req, res) {
  db.Quiz.findAll().then(function(dbPost) {
    res.json(dbPost);
  });
});

Router.post("/", (req, res) => {
  db.Quiz.create({
    title: req.body.title,
    description: req.body.description,
    UserId: req.body.UserId
  })
    .then((dbPost) => {
      console.log(dbPost);
      res.json(dbPost);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

module.exports = Router;
const Router = require("express").Router();
const db = require("../models");

// Router.get("/", function(req, res) {
//   db.Quiz.findAll().then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

Router.get("/", function(req, res) {
  db.Quiz.findAll({
    include: [
      {
        model: db.Question,
        include: [
          db.Option
        ]
      }
    ]
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

Router.get("/:id", function(req, res) {
  db.Quiz.findOne({where: {id: req.params.id},
    include: [
      {
        model: db.Question,
        include: [
          db.Option
        ]
      }
    ]
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});


// Router.get("/questions", function(req, res) {
//   db.Question.findAll().then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

// Router.get("/options", function(req, res) {
//   db.Option.findAll().then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

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

Router.post("/new-question", (req, res) => {
  db.Question.create({
    question: req.body.question,
    QuizId: req.body.QuizId
  })
    .then((dbPost) => {
      console.log(dbPost);
      res.json(dbPost);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

Router.post("/new-choice", (req, res) => {
  db.Option.create({
    choice: req.body.choice,
    isCorrect: req.body.isCorrect,
    QuestionId: req.body.QuestionId
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
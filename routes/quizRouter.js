const Router = require("express").Router();
const db = require("../models");


// Find All Quizzes
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

// Find One Quiz by Quiz ID
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

// Find All Quizzes by User ID
Router.get("/user/:UserId", function(req, res) {
  db.Quiz.findAll({where: {UserId: req.params.UserId},
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


// Create new quiz
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

// Create new quiz question
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

// Create new quiz question option
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

// Delete quiz question
Router.delete("/delete-question", (req, res) => {
  db.Question.destroy({ where: {id: req.body.id}})
    .then((dbPost) => {
      console.log(dbPost);
      res.status(200).end();
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

// Delete quiz question option
Router.delete("/delete-choice", (req, res) => {
  db.Option.destroy({ where: {id: req.body.id}})
    .then((dbPost) => {
      console.log(dbPost);
      res.status(200).end();
    })
    .catch(err => {
      res.status(401).json(err);
    });
});


module.exports = Router;
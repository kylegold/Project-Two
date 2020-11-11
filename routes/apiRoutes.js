const Router = require("express").Router();
const quizRouter = require("./quizRouter.js");
const passportRouter = require("./passportRouter.js");

Router.use("/quizzes", quizRouter);

Router.use("/", passportRouter);

module.exports = Router;
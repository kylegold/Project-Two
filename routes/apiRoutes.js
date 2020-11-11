const Router = require("express").Router();
const quizRouter = require("./quizRouter.js");
const passportRouter = require("./passportRouter.js");
const quizWebApiRouter = require("./quizWebApiRouter.js");

Router.use("/", passportRouter);

Router.use("/quizzes", quizRouter);

Router.use("/quiz-web", quizWebApiRouter);


module.exports = Router;
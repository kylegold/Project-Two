// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const Router = require("express").Router();


Router.get("/", (req, res) => {
  // If the user already has an account send them to the dashboard page
  if (req.user) {
    res.redirect("/dashboard");
  }
  res.render("index", {layout: "main"});
  // res.sendFile(path.join(__dirname, "../public/signup.html"));
});

Router.get("/login", (req, res) => {
  // If the user already has an account send them to the dashboard page
  if (req.user) {
    res.redirect("/dashboard");
  }
  res.render("login", {layout: "main"});
  // res.sendFile(path.join(__dirname, "../public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
Router.get("/dashboard", isAuthenticated, (req, res) => {
  res.render("dashboard", {layout: "main"});
  // res.sendFile(path.join(__dirname, "../public/dashboard.html"));
});
module.exports = Router;
// // Create a quiz.. choose between search by quiz id, author id, or category
// app.get("/create-quiz", isAuthenticated, (req, res) => {
//   res.send("Create a quiz.. Create New Quiz or Update Old Quiz");
// });

// // Create a quiz.. add title, description, add new question, save quiz
// app.get("/create-new-quiz", isAuthenticated, (req, res) => {
//   res.send("Create a new quiz .. title, description, add new question, save quiz");
// });

// // Add a question.. add title, add choices, true/false correct choice, save question
// app.get("/create-new-quiz/new-question", isAuthenticated, (req, res) => {
//   res.send("Create a new question .. title, add choices, true/false correct choice, save question");
// });

// //

// // Take a quiz.. choose between search by quiz id, author id, or category
// app.get("/take-a-quiz", isAuthenticated, (req, res) => {
//   res.send("Search by Quiz ID, USER ID, Category");
// });

// // By quiz id
// app.get("/take-a-quiz/quiz-id", isAuthenticated, (req, res) => {
//   res.send("Search by Quiz ID");
// });

// // quiz overview page
// app.get("/take-a-quiz/quiz-id/:id", isAuthenticated, (req, res) => {
//   res.send("Quiz Overview Page");
// });

// // quiz overview page
// app.get("/quizzes", isAuthenticated, (req, res) => {
//   // res.send("Quiz Overview Page");
// });


// // quiz start
// app.get("/take-a-quiz/quiz-id/:id/start", isAuthenticated, (req, res) => {
//   res.send("Quiz Start Page");
// });

// // by author id
// app.get("/take-a-quiz/user-id", isAuthenticated, (req, res) => {
//   res.send("Search by User ID");
// });

// // by author id
// app.get("/take-a-quiz/user-id/:id", isAuthenticated, (req, res) => {
//   res.send("Quizzes created by Author [id]");
// });

// // By category
// app.get("/take-a-quiz/categories", isAuthenticated, (req, res) => {
//   res.send("Search by Categories");
// });







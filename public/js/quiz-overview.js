$(document).ready(() => {
  const quizOverview = async function() {
  const quiz = await $.get("/api/quizzes/1");
  console.log(quiz.title);
  console.log(quiz.description);
  console.log(quiz.Questions.length);
  $(".quiz-title").text(quiz.title);
  $(".quiz-description").text(quiz.description);
  $(".quiz-question-number").text(quiz.Questions.length);

}
quizOverview();
});




$(document).ready(() => {
  const quizId = sessionStorage.getItem('quizId')
  console.log(quizId)
  const quizOverview = async function() {


  const quiz = await $.get("/api/quizzes/"+ quizId);

  console.log(quiz.title);
  console.log(quiz.description);
  console.log(quiz.Questions.length);
  $(".quiz-title").text(quiz.title);
  $(".quiz-description").text(quiz.description);
  $(".quiz-question-number").text(quiz.Questions.length);
}
quizOverview();
});


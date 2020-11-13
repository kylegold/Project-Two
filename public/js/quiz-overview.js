

$(document).ready(() => {
  const quizId = sessionStorage.getItem('quizId')
  console.log(quizId)
  const quizOverview = async function() {

  // var url= window.location.href.split("/"); 
  // var quizId= url[url.length - 1]; 
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


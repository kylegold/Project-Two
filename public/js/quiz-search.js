$(document).ready(() => {
  const searchInput = $(".searchInput");
  $("#searchQuizId").click(()=> {
    console.log(searchInput.val());
  const searchQuiz = async () => {
    const quiz = await $.get('/api/quizzes/' + searchInput.val().toString())
    console.log(quiz)
    };
searchQuiz();
  });
});
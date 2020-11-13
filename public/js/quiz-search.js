$(document).ready(() => {
  const searchInput = $(".searchInput");
  $("#searchQuizId").click(()=> {
    console.log(searchInput.val());
    quizId = searchInput.val().toString();
    sessionStorage.setItem("quizId", quizId);
  const searchQuiz = async () => {
    const quiz = await $.get('/api/quizzes/' + quizId);
    console.log(quiz)
    console.log(quizId)
    if(quiz) {
      window.location.replace("/take-a-quiz/quiz-overview");
    }
    
    };
searchQuiz();
  });
  
});
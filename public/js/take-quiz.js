$(document).ready(() => {

  let correctCount = 0;
  let incorrectCount = 0;
  let counter = 0;

  const startQuiz = async function() {
    // Prevent form submission from refreshing the page
    // event.preventDefault();
    // Using Quiz ID loop through the quiz questions
    $('.quizEndContainer').hide();
    const quizId = sessionStorage.getItem('quizId')
    const quiz = await $.get("/api/quizzes/" + quizId);
    console.log(quiz)
    $('h1').text(quiz.title)
    // Questions array
    let questions = quiz.Questions;
    console.log(questions.length)
    if (counter < questions.length)
     {
      
      const playQuiz = function () {
        console.log(questions)
      // $('#quiz-question').text() = question.question
      // get quiz-question id div and set the text to the current question
      $('.quiz-question > h3').text(JSON.stringify(questions[counter].question))
      questions[counter].Options.forEach(option => {
        console.log(option.choice)
        // create new button element
        // add choice-button class
        let newEl = document.createElement('button')
        $(newEl).attr("class", "choice-button");
        // // add option text to button text
        $(newEl).text(option.choice).attr('value', option.choice)
        // // place element inside quiz-choices div
        $('.quiz-choices').append(newEl)
        })
        // $('#quiz-choices').add("button").classList("choice-button").text() = option;
        } 
        playQuiz()
        // If choice button is clicked
        $(".choice-button").on("click", function(event) {
          const [correctAnswer] = questions[counter].Options.filter(correct => {
            return correct.isCorrect === true;
          })
          console.log('correct answer', correctAnswer)
          
          
        // check if answer is correct
          if(correctAnswer.choice == event.target.value){
            console.log('answer correct')
        // // if answer is correct add point to correctCount
         correctCount++;} else {
          console.log('answer incorrect')
        // // else wrong add point to incorrectCount
        incorrectCount++;}
        // then increase index counter to move to next question
        $('.choice-button').remove()
        console.log('correct count ', correctCount)
        console.log('incorrect count ', incorrectCount)
        console.log(event.target.value)
        counter++;
        console.log('new count: ' + counter)
        startQuiz();
      });
      
    }
    else {
      // show quiz results.. quizEndContainer
      $('.quizContainer').hide();
      $('.quizEndContainer').show();
      $('#quiz-score').text((correctCount / questions.length))
      $('#quiz-length').text(questions.length)
      $('#quiz-correct-score').text(correctCount + ' / ' + questions.length)
      $('#quiz-incorrect-score').text(incorrectCount + ' / ' + questions.length)
    }
  };
  startQuiz()
});
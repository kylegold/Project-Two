$(document).ready(() => {

  let correctCount;
  let incorrectCount;
  let counter = 0;

  const startQuiz = async function() {
    // Prevent form submission from refreshing the page
    // event.preventDefault();
    // Using Quiz ID loop through the quiz questions
    const quiz = await $.get("/api/quizzes/1");
    console.log(quiz)
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
        $(newEl).text(JSON.stringify(option.choice))
        // // place element inside quiz-choices div
        $('.quiz-choices').append(newEl)
      
        })
        // $('#quiz-choices').add("button").classList("choice-button").text() = option;
        } 
        playQuiz()
        // If choice button is clicked
        $(".choice-button").on("click", function(event) {
        // check if answer is correct
        // if answer is correct add point to correctCount
        // correctCount++;
        // else wrong add point to incorrectCount
        // incorrectCount++;
        // then increase index counter to move to next question
        $('.choice-button').remove()
        console.log('targeted click: ' + event.target.value)
        counter++;
        console.log('new count: ' + counter)
        startQuiz();
      });
      
    }
    else {
      // show quiz results.. quizEndContainer
      $('#quiz-score').text(((parseInt(questions.length) / parseInt(correctCount))))
      $('#quiz-length').text(questions.length)
      $('#quiz-correct-score').text(questions.score)
      $('#quiz-incorrect-score').text(questions.length)
    }
  };
  startQuiz()
});
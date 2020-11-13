// When document is ready
$(document).ready(() => {
  // Variable to store new quiz ID once its created
  let newQuizId;
  // When quiz is created
  $("#quiz-info").on("submit", async function(event) {
    // Prevent form submission from refreshing the page
    event.preventDefault();

    // Post the quiz only if title is not empty
    if ($("#quiz_title").val().trim()) {
      // Get user id
      const userData = await $.get("/api/user_data");
      // Post the quiz
      const response = await $.post("/api/quizzes/", {
        title: $("#quiz_title").val().trim(),
        description: $("#quiz_description").val().trim(),
        UserId: userData.id
      });
      // console.log(response);
      // Store the quiz ID from response
      newQuizId = response.id;
      // Update the heading to show new quiz id
      $("header h1").text("Quiz ID: " + newQuizId);

      // Disable all input field on this form
      $("#quiz-info input").prop("disabled", true);
      $("#quiz-info textarea").prop("disabled", true);
      // Remove create quiz button
      $("#create-quiz").remove();
      // Show the button to add question
      $("#update-quiz").show();
    }
  });

  // When add a question button is clicked
  $("#add-question").on("click", function() {
    // Hide the button
    $("#add-question").hide();
    // Show the form to add a question
    $("#question-info").show();
    // Hide less option button
    $("#less-option").hide();
    // Hide the button to submit the quiz
    $(".submit-quiz").hide();
  });

  // When more option button is clicked
  $("#more-option").on("click", function() {
    // console.log($(".option-info"));
    // Clone an option row, making option empty and unchecking by default
    const tempEl = $(".option-info").first().clone().addClass("cloned");
    tempEl.find(".quiz_answer").val("");
    tempEl.find(".answer-isCorrect").prop("checked", false);
    tempEl.appendTo(".all-options");
    // Limit the options to 5
    if ($(".option-info").length === 5) {
      // Hide the more options button
      $("#more-option").hide();
    }
    // Show less option button
    $("#less-option").show();
  });

  // When less option button is clicked
  $("#less-option").on("click", function() {
    // Remove the last option row
    $(".option-info").last().remove();
    // Limit the options to 1
    if ($(".option-info").length === 1) {
      // Hide the less options button
      $("#less-option").hide();
    }
    // Show more option button
    $("#more-option").show();
  });

  // When a question form is submitted
  $("#question-info").on("submit", async function(event) {
    // Prevent form submission from refreshing the page
    event.preventDefault();

    // Check all the options to see if any of them is empty
    for (let i = 0; i < $(".quiz_answer").length; i++) {
      // If any of the options is empty return early
      if (!$($(".quiz_answer")[i]).val().trim()) {
        return;
      }
    }

    // Post only if question is not empty
    if ($("#quiz_question").val().trim()) {
      // Post the question
      const response = await $.post("/api/quizzes/new-question", {
        question: $("#quiz_question").val().trim(),
        QuizId: newQuizId
      });
      // Store new question ID
      const newQuestionId = response.id;
      // Add question to the question views
      $("<li>").text($("#quiz_question").val().trim()).appendTo("#questions-view");

      // Post all the options
      // const options = [];
      for (let i = 0; i < $(".quiz_answer").length; i++) {
        // console.log($($(".quiz_answer")[i]).val() + $($(".answer-isCorrect")[i]).prop("checked"));
        // options.push({
        await $.post("/api/quizzes/new-choice", {
          choice: $($(".quiz_answer")[i]).val().trim(),
          isCorrect: $($(".answer-isCorrect")[i]).prop("checked"),
          QuestionId: newQuestionId
        });
      }
      // console.log(options);

      // Hide the form and reset it
      $("#question-info").hide();
      $("#question-info").trigger("reset");
      // Remove all cloned elements
      $(".cloned").remove();
      // Show the more options button if hidded
      $("#more-option").show();
      // Show the button to add more questions
      $("#add-question").show();
      // Show the button to submit the quiz
      $(".submit-quiz").show();
    }
  });

  // When submit quiz button is clicked
  $("#submit-quiz").on("click", function() {
    // Redirect back to dashboard page
    location.replace("/dashboard/");
  });
});
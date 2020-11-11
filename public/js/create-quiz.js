// When document is ready
$(document).ready(() => {
  // When add a question button is clicked
  $("#add-question").on("click", function() {
    // Hide the button
    $("#add-question").hide();
    // Show the form to add a question
    $("#question-info").show();
  });

  // When more option button is clicked
  $("#more-option").on("click", function() {
    console.log($(".option-info"));
    // Clone an option row
    $(".option-info:first").clone().addClass("cloned").appendTo(".all-options");
    // Limit the options to 5
    if ($(".option-info").length === 5) {
      // Hide the more options button
      $("#more-option").hide();
    }
  });

  // When a question form is submitted
  $("#question-info").on("submit", function(event) {
    // Prevent form submission from refreshing the page
    event.preventDefault();
    // console.log($("#quiz_question").val());
    // Hide the form and reset it
    $("#question-info").hide();
    $("#question-info").trigger("reset");
    // Remove all cloned elements
    $(".cloned").remove();
    // Show the more options button if hidded
    $("#more-option").show();
    // Show the button to add more questions
    $("#add-question").show();
  });
});
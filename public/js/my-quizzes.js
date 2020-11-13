$(document).ready( function(){
    
    populateQuizList(); 

});
async function populateQuizList(){
        // get user data
     const userData = await $.get("/api/user_data");
        // get user's quizzes
    const quizList = await $.get("/api/quizzes/user/"+ userData.id);
        // for loop to concatenate li to the collection element in user-id-search
    var collection = $("#quiz-collection")
    for(var index=0; index<quizList.length; index= index+1){
        var quiz = quizList[index]; 
        var url = "/take-a-quiz/quiz-overview/p/"+ quiz.id 
        var li = '<a href="'+ url +'" class="collection-item">'+ quiz.title + ' | id: #' + quiz.id +'</a>'
        collection.append(li); 
    }

    

}


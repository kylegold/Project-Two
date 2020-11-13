$(document).ready( function(){
    
    populateQuizList(); 

});
async function populateQuizList(){
        // get user data
     const userData = await $.get("/api/user_data");
        // get user's quizzes
    const quizList = await $.get("/api/quizzes/user/"+ userData.id);
    console.log(quizList)
        // for loop to concatenate li to the collection element in user-id-search
    var collection = $("#quiz-collection")
    for(var index=0; index<quizList.length; index= index+1){
        var quiz = quizList[index]; 
        var url = "/take-a-quiz/quiz-overview/"
        var li = '<a href="#" class="collection-item" value="'+quiz.id+'">'+ quiz.title + ' | id: #' + quiz.id +'</a>'
        console.log(quiz.id)
        collection.append(li); 
    }
    // '<a href="'+ url +'
    $(".collection-item").on("click", (event) => {
        console.log((event.target.getAttribute("value")))
        // if(!sessionStorage.getItem('quizId')){
        //     sessionStorage.getItem('quizId')
        // }
    })
    

}


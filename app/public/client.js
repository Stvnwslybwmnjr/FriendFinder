$(document).ready(function(){
    $("#submit").on("click", function(){

        event.preventDefault();
        let answers = [];
        for(let i = 1; i < 11; i++) {
            answers.push(parseInt($(`#q${i}`).val().trim()))
        };
        let newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            answers: answers
        }

        .post("/api/friends", newFriend)
        .then(function(response) {
            console.log(response);
            $.get("/api/friends").then(function (response){
                console.log(response);
            })
        })

    })
})
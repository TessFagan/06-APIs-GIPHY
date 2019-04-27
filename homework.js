
// array of emotions
var topics = ["happy", "sad", "depressed", "silly", "confused", "excited", "scared", "nervous", "jealous", "hungry", "tired"]

// insert a loop that appends a button for each string in the array here

function createinitialbuttons() {
    for (i = 0; i < topics.length; i++) {
        $("#buttonsdiv").append(`
        <button type="button" class="btn btn-primary">${topics[i]}</button>
        `)
    }
}

createinitialbuttons()

function appendbutton() {
    x = topics.length
    console.log(topics.length)
    $("#buttonsdiv").append(`
        <button type="button" class="btn btn-primary">${topics[x - 1]}</button>
        `)
}

function submitbutton() {
    $("#add-giph").on("click", function (event) {
        event.preventDefault();

        // Capture User Inputs and store them into variables
        var forminput = $("#forminput").val()
        console.log(forminput);
        topics.push(forminput);
        console.log(topics)
        appendbutton()
    }
    )
};

submitbutton()

//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=F2N577lFigLDewYdaLgZpyVg597cBLg7&limit=5");
xhr.done(function (data) { console.log("success got data", data); });



// variables and array of emotions
var topics = ["happy", "sad", "depressed", "silly", "confused", "excited", "scared", "nervous", "jealous", "hungry", "tired"]
var searchvalue = "happy"
var y = " "
var x = " "

// insert a loop that appends a button for each string in the array here

function createinitialbuttons() {
    for (i = 0; i < topics.length; i++) {
        $("#buttonsdiv").append(`
        <button type="button" class="btn btn-primary" value="${topics[i]}">${topics[i]}</button>
        `)
    }
}

createinitialbuttons()

function appendbutton() {
    x = topics.length
    console.log(topics.length)
    $("#buttonsdiv").append(`
        <button type="button" class="btn btn-primary" value="${topics[x - 1]}">${topics[x - 1]}</button>
        `)
    setsearchvalue()
}

function setsearchvalue() {
    $(".btn.btn-primary").on("click", function (event) {
        console.log("its clicked")
        searchvalue = this.value
        console.log(searchvalue);
        searchandappend()
    }
    )
}
setsearchvalue()


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

//API Stuff here:

var queryURL = `https://api.giphy.com/v1/gifs/search?q=${searchvalue}&api_key=F2N577lFigLDewYdaLgZpyVg597cBLg7&limit=10`;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    y = response;
    console.log(y);
});


function searchandappend() {
    queryURL = `https://api.giphy.com/v1/gifs/search?q=${searchvalue}&api_key=F2N577lFigLDewYdaLgZpyVg597cBLg7&limit=10`;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        y = response;
        console.log(y);
    });

    $("#gifshere").empty()

    for (i = 0; i < y.data.length; i++) {
        $("#gifshere").append(`
        <div> <img src=${y.data[i].images.fixed_width_small_still.url} still=${y.data[i].images.fixed_width_small_still.url} moving=${y.data[i].images.fixed_width.url} state="still" class="gif" id=${y.data[i].id}> </div>`);
    }
}

function gifplay() {
    $(document).on("click", ".gif", function () {
        var state = $(this).attr("state");
        console.log(state);

        if (state === "still") {
            $(this).attr("src", $(this).attr("moving"))
            $(this).attr("state", " ")

        }
        else {
            $(this).attr("src", $(this).attr("still"))
            $(this).attr("state", "still")
        }
    })
}

gifplay()
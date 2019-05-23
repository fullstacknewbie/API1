'use strict';

function getImage() {
    fetch ("https://dog.ceo/api/breeds/image/random/"+document.getElementById("numSelected").value+"")
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
    console.log(responseJson);
}

function watchForSubmit() {
    $("form").submit(event => {
        event.preventDefault();
        getImage();
    });
}

$(function() {
    console.log("Waiting for submission");
    watchForSubmit();
});
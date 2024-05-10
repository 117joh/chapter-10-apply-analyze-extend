/*
    Student Name:KAi Alexandre 
    File Name: script.js
    Date: 5/9/2024
*/

$(document).ready(function() {
    // Hide button click event
    $('button:contains("Hide")').click(function() {
        $('article p').hide(); // Hide all paragraph elements within the article
    });

    // Show button click event
    $('button:contains("Show")').click(function() {
        $('article p').show(); // Show all hidden paragraph elements within the article
    });
});
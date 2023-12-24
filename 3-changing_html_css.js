/**
 * Modify HTML content and CSS styling using jQuery methods
 * To change CSS styling, best practice is use .addClass() method to HTML elements
 */

//retrieves HTML from class "table-start"
$(".table-start").html()

//add paragraph to all h1 elements
$("h1").html("<p>Hello world!</p>")

//change styling through adding and removing class to/from HTML element
$(".btn1".addClass("btn-green"))
$(".btn1".removeClass("btn-green"))

// Modify the text content of all of the paragraph elements on the page
$("p").text("New text");

// Append a span to every paragraph
$("p").append("<span>lorem ipsum</span>");

// Remove all links using the remove function
$("a").remove();

// Empty all div elements that have a class of card
$("div.card").empty();
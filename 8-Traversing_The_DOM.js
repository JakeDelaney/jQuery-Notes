/**
 * jQuery also for transfering the DOM to select elements that may not have
 * a specific class or ID
 */

//Obtain direct parent of an element
$("example-btn").parent()

//Return all direct child elements
$("example-btn").children()

//Return specific child elements (e.g paragraphs)
$("example-btn").children("p")

//Select next sibling element
$("button").next()

//Select previous sibling
$("p").prev()

//Toggle class on element
$("h1").toggleClass("example-class")

//Returns first element in the selected set of elements
$(".example-class").first()

//Returns last element in the selected set of elements
$("span").last()

//Returns all elements of a given element, that share the same parents
//The below block adds a click event for div elements
//The "highlight" class is added to the siblings of the div element that is clicked
$("div").click(function(){
    $(this).siblings().addClass("highlight")
})
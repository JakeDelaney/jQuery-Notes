/**
 * jQuery methods can be chained together for less verbose code.
 * This chaining applies to both Event Handlers and Effects
 */

//Two seperate lines of code to add and remove classes from an element
$("#myButton").removeClass("border");
$("#myButton").addClass("border");

//To make the code less verbose, these two methods can be chained together
$("#myButton").removeClass("border").addClass("bluebox");

//Chaining Event Handlers together
$("p").slideUp(2000).slideDown(2000);

//the attr() attribute acts as both a getter and a setter
$("a").attr("href", "https://www.google.com/"); //query with one parameter (href) and update with second parameter (google)
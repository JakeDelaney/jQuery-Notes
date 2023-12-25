/**
 * The "this" keyword refers to the active element itself.
 * The "this" keyword is useful to apply changes
 * to a single element through an Event Handler (when the element shares a class with another element,
 * or has been selected by the element type)
 */

//Given multiple buttons, the below Event Handler will apply a class to all buttons (if just a single is clicked)
$("button").onclick(function(){
    $("button").addClass("make-green")
})

//Using the "this" keyboard ensures that only the clicked button has the class applied to it.
$("button").onclick(function(){
    $(this).addClass("make-green")
})
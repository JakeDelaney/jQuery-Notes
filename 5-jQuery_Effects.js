/**
 * jQuery effects change how HTML visibly appears to a user.
 * Effects such as hide, show, slide, and fade can be implemented over a specified time resulting in animation
 */

//hide an element when a click event is handled
$("#card-1").click(function(){
    $("#card-1-content").hide('slow')
})

$("#card-2").click(function(){
    $("#card-2-content").hide("medium")
})

$("#card-3").click(function(){
    $("#card-3-content").hide("fast")
})

$("#card-4").click(function(){
    $("#card-4-content").hide(3000)
})
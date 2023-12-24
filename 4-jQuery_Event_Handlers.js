/**
 * jQuery Event Handlers execute after a specific user interaction
 */

$(document).ready(function() { //Best practice - enclosed code will only run if HTML document is fully loaded

    //execute code when clicked
    $("#stream1_btn").click(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });

   //execute code when mouse hovers over element
   $("#stream2_btn").mouseover(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });

   //execute code when mouse leave element
   $("#stream3_btn").mouseleave(function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 
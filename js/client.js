$(function() {
  $('#paper').scroll(function() {
    pageHeight = $('#paper-front').outerHeight()
    scrollTop = $('#paper').scrollTop()
    equation = (scrollTop + 1800) / pageHeight * 100;
    $("#paper-front").css('transform-origin', 'center ' + equation + '%');
  })
  $('.slider').sss({
    slideShow : true, // Set to false to prevent SSS from automatically animating.
    startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
    transition : 900, // Length (in milliseconds) of the fade transition.
    speed : 3500, // Slideshow speed in milliseconds.
    showNav : true // Set to false to hide navigation arrows.
  });

})

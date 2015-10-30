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

  var handler = StripeCheckout.configure({
    key: 'pk_test_XRcg6z6XeDDI9082dNpOIf9h',
    image: '/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    }
  });

  $('#customButton').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Weareaddsubtract',
      description: '2 widgets',
      amount: 2000,
      shippingAddress: ''
    });
    e.preventDefault();
  });

  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  });

})

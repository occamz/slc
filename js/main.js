$(document).ready(function() {

  // Prevent the 100vh "jumping" on mobile browsers
  $(".header").each(function() {
    var element = $(this);
    element.height(element.height() + "px");
  });

  
});

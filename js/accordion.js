// Accordion
$(document).ready(function(e) {
  $(".characteristics").click(function() {
    $(".arrow-top").toggleClass("display_none");
    $(".arrow-bottom").toggleClass("display_none");
    $(".submenu").slideToggle(500);
  });

  $(".information").click(function() {
    $(".arrow-top_inf").toggleClass("display_none");
    $(".arrow-bottom_inf").toggleClass("display_none");
    $(".submenu-inf").slideToggle(500);
  });

  $("#feature1").click(function() {
    $(".submenu-inf__value").text("125.000 Р.");
  });

  $("#feature2").click(function() {
    $(".submenu-inf__value").text("149.999 Р.");
  });

  $("#feature3").click(function() {
    $(".submenu-inf__value").text("189.990 Р.");
  });
})

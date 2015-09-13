$(document).ready(function () {

    /*Full-Size Drop-Down*/
        $("#solution-ul").on("mouseenter", function () {
          if ($(window).width() > 720) {
              $("#solution-dd").show();
          }
        });

        $("#solution-ul").on("mouseleave", function () {
          if ($(window).width() > 720) {
            $("#solution-dd").hide();
          }
        });

    /* Hamburger drop down for mobile menu*/
    $(".hamburger").on("click", function () {
      $("nav").toggle();
      $("#solution-dd").show();
    });

  /* Full-Screen Show Nav Bar & Hide DD*/
  $(window).resize(function () {
      if ($(this).width() >= 726) {
          $("nav").show();
          $("#solution-dd").hide();
      }
  });

  /* Mobile Hide Nav*/
  $(window).resize(function () {
      if ($(this).width() < 726) {
          $("nav").hide();
      }
  });


});


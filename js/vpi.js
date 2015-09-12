$(document).ready(function () {

    /*Full-Size Load*/
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
  });
$(document).ready(function () {

    /*Full-Size Load Width */
    //On Load

    if ($(this).width() >= 726) {

        $("#solution-ul").on("mouseenter", function () {
            $("#solution-dd").show();
        });
        $("#solution-ul").on("mouseleave", function () {
            $("#solution-dd").hide();
        });
    }

    //On Resize
    $(window).resize(function () {
        if ($(this).width() >= 726) {

            $("#solution-ul").on("mouseenter", function () {
                $("#solution-dd").show();
            });
            $("#solution-ul").on("mouseleave", function () {
                $("#solution-dd").hide();
            });
        }
    });


    /* Show Soluiton SubmMenu For Mobile*/
    //On Load
    if ($(this).width() < 726) {
        $("#solution-dd").show();
    }


  //On Resize
  $(window).resize(function () {
      if ($(this).width() < 726) {
          $("#solution-dd").show();
      }
  });

  $(window).resize(function () {
      if ($(this).width() >= 726) {
          $("#solution-dd").hide();
      }
  });




/* Hamburger drop down for mobile menu*/
$(".hamburger").on("click", function () {
    $("nav").toggle();
    $("#solution-dd").show();
});

});
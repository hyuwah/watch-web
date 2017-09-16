$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $("html").easeScroll({
      frameRate: 60,
      animationTime: 1000,
      stepSize: 120,
      pulseAlgorithm: 1,
      pulseScale: 8,
      pulseNormalize: 1,
      accelerationDelta: 20,
      accelerationMax: 1,
      keyboardSupport: true,
      arrowScroll: 50,
      touchpadSupport: true,
      fixedBackground: false
    });

    
    $('.modal').modal();

  cookie();
   
    
  });

    //Raised navbar
    $(window).scroll(function () {

        
        var y = $(window).scrollTop();
        var winH = $(window).height();
        if (y > winH) {
          $("#navbar").removeClass('transparent z-depth-0').addClass('grey darken-4 z-depth-1');
        } else if (y < winH) {
          $("#navbar").removeClass('grey darken-4 z-depth-1').addClass('transparent z-depth-0');
        } 
        // else {
        //   $("#navbar").removeClass('transparent z-depth-0').addClass('grey darken-4 z-depth-1');
        // }
      });


      $("#btn-in").click(function() {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1000);
    });

function cookie() {
  window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#000"
        },
        "button": {
          "background": "#f1d600"
        }
      },
      "theme": "edgeless",
      "position": "bottom"
    })});
}
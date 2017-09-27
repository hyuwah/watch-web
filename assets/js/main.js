$(document).ready(function () {
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
  $('select').material_select();

  $('input.autocomplete#form-order-kota').autocomplete({
    data: {
      "Bandung": null,
      "Jakarta": null,
      "Yogyakarta": null,
      "Semarang": null,
      "Surabaya": null

    },
    limit: 3 // The max amount of results that can be shown at once. Default: Infinity.

  });


  $('#form-order-custom').hide();
  $('#form-order-mode-switch').click(function () {
    // Hide Reguler / Show Reguler
       $('#form-order-reguler').toggle();
    $('#form-order-model-reguler').val('');
    $('#form-order-jumlah').val('');
    

    // Show Custom / Hide Custom
    $('#form-order-custom').toggle();
    $('#form-order-model-custom').val('');
    
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


$("#btn-in").click(function () {
  $('html, body').animate({
    scrollTop: $("#main").offset().top
  }, 1000);
});

function cookie() {
  window.addEventListener("load", function () {
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
    })
  });
}
$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();

    $('.modal-trigger').leanModal();
    $('#push,section').pushpin({ top:$('#push').height() });

  
   
    
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
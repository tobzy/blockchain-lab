/*===================================
=            TRIPE SLIDE            =
===================================*/

var tripCarousselNumberEl = $("#section-trip .container-text .container-el .el").length;
var tripCarousselcountEl = 0;
var delayTripCaroussel = 4000;

function sectionTripCarousselPrg(){

  var elImg = '#section-trip .container-img .container-slides .container-el .el';
  var elCard = '#section-trip .container-img .container-slides .container-card .card';

  if (tripCarousselcountEl < tripCarousselNumberEl) {

    setTimeout(function() {
      $('#section-trip .container-img .container-slides .container-el').addClass('anim');
      $('#section-trip .container-img .container-slides .container-card').addClass('anim');
      setTimeout(function() {
        $('#section-trip .container-img .container-slides .container-el').removeClass('anim');
        $('#section-trip .container-img .container-slides .container-card').removeClass('anim');
        $('#section-trip .container-text .container-el .el.hide').removeClass('hide');
      }, 2000);
    }, 3050);

    $('#section-trip .container-text .container-el .el.show').removeClass('show');

    $(elImg + '.show').removeClass('show').addClass('hide');
    $(elCard + '.show').removeClass('show').addClass('hide');

    
    $(elImg + '.hide').hide().removeClass('hide');
    $(elCard + '.hide').hide().removeClass('hide');
    
    tripCarousselcountEl++;
    
    $('#section-trip .container-text .container-el .el:nth-child('+tripCarousselcountEl+')').addClass('show');

    $('.' + $('#section-trip .container-text .container-el .el.show').data('img')).show();
    $('.' + $('#section-trip .container-text .container-el .el.show').data('card')).show();
    
    setTimeout(function() {
      $(elImg + ':visible').addClass('show');
      $(elCard + ':visible').addClass('show');
      
    }, 50);
    
    setTimeout(function() {
      
      sectionTripCarousselPrg();
    }, delayTripCaroussel);

  } else {
    tripCarousselcountEl = 0;
    sectionTripCarousselPrg();
  };
};
var parent = $("#section-trip .container-text .container-el");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
function sectionTripCarousselInit(){
  $('#section-trip .container-text .container-el .el:nth-child(1)').addClass('show');
  sectionTripCarousselPrg();
  
};

/*=====  End of TRIPE SLIDE  ======*/


/*=============================
=            QUOTE            =
=============================*/

$('#section-quotes .container-quotes .wrapper-quotes .quote').addClass('hide');
$('#section-quotes .container-quotes .wrapper-quotes .quote:nth-child(1)').removeClass('hide').addClass('show');


var quotesCarousselnumberEl = $("#section-quotes .container-quotes .wrapper-quotes .quote").length;
var quotesCarousselcountEl = 0;
var delayQuotesCaroussel = 10000;
function quotesCaroussel(){

  if (quotesCarousselcountEl < quotesCarousselnumberEl) {

    $('#section-quotes .container-quotes .wrapper-quotes .quote.show').removeClass('show').addClass('hide');

    setTimeout(function() {
      $('#section-quotes .container-quotes .wrapper-quotes .quote.hide').hide().removeClass('hide');
      quotesCarousselcountEl++;

      $('#section-quotes .container-quotes .wrapper-quotes .quote:nth-child('+quotesCarousselcountEl+')').show();
      setTimeout(function() {
        $('#section-quotes .container-quotes .wrapper-quotes .quote:visible').addClass('show');
      }, 50);

    }, 1000);

    setTimeout(function() {
      quotesCaroussel();
    }, delayQuotesCaroussel);

  } else {
    quotesCarousselcountEl = 0;
    quotesCaroussel();
  };

}
quotesCaroussel();
/*=====  End of QUOTE  ======*/


/*=====================================
=            SLIDER OFFICE            =
=====================================*/

function officeCarousselInit(){
  $('#section-office .wrapper-img .container-el .el:nth-child(1)').show().addClass('show');
}

/*=====  End of SLIDER OFFICE  ======*/

/*====================================
=            SECTION TEAM            =
====================================*/

function sectionTeamRandom(){
  var parent = $("#section-team .wrapper .container-el");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
};
sectionTeamRandom();



/*=====  End of SECTION TEAM  ======*/



/*==============================================
=            SECTION OFFICE CAROUSSEL            =
==============================================*/


var numberEl = $("#section-office .wrapper-img .container-el .el").length;
var countEl = 1;
var delayTeamCaroussel = 6000;
var intervalTeamCaroussel = setInterval(function() {
       sectionTeamCarousselInit();
    }, delayTeamCaroussel);

function sectionTeamCarousselPrg(){

  $('#section-office .wrapper-img .container-action .btn .progress').removeClass('active');

      setTimeout(function() {
        $('#section-office .wrapper-img .container-action .btn .progress').addClass('active');
      }, 50);

  var elPp = '#section-office .wrapper-img .container-el .el';

  if (countEl < numberEl) {

    $(elPp + '.show').removeClass('show').addClass('hide');

    setTimeout(function() {
      $(elPp + '.hide').hide().removeClass('hide');
    }, 700);

    countEl++;

    $('#section-office .wrapper-img .container-el .el:nth-child('+countEl+')').show();
    
    setTimeout(function() {
      $(elPp + ':visible').addClass('show');
      
    }, 100);

    clearInterval(intervalTeamCaroussel);
    intervalTeamCaroussel = setInterval(function() {
      sectionTeamCarousselPrg();
    }, delayTeamCaroussel);

  } else {
    countEl = 0;
    sectionTeamCarousselPrg();
  };
};

function sectionTeamCarousselInit(){
  /*var parent = $("#section-office .wrapper-img .container-el");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }  
    $('#section-office .wrapper-img .container-el .el:nth-child(1)').addClass('show');*/
    
    sectionTeamCarousselPrg();
};

$('#section-office .wrapper-img .container-action .btn').click(function(){

  $('#section-office .wrapper-img .container-action .btn .progress').removeClass('active');

  clearInterval(intervalTeamCaroussel);
    intervalTeamCaroussel = setInterval(function() {
      sectionTeamCarousselPrg();
    }, delayTeamCaroussel);
    sectionTeamCarousselPrg();

    

})

/*=====  End of SECTION OFFICE CAROUSSEL  ======*/
    


$(document).ready(function() {

  if (window.matchMedia("(min-width: 1250px)").matches) {

    /*===================================
    =            WRAP LETTER            =
    ===================================*/

    $('#section-cover h1 > span:nth-child(1)').each(function (index) {
        var characters = $(this).text().split("");
        
        $this = $(this);
        $this.empty();
        $.each(characters, function (i, el) {
        $this.append("<span>" + el + "</span");
        });

    });

    /*=====  End of WRAP LETTER  ======*/
    
  }

  

});


$(window).on('load', function() {

  setTimeout(function() {
    $('#section-cover').addClass('anim');
    setTimeout(function() {
      scrollAnim();
    }, 500);
  }, 100);
  

  $window = $(window);
  var windowHeight = $window.height() / 1.5;

  var distanceSectionTrip = $('#section-trip').offset().top - windowHeight;
  var distanceSectionTeam = $('#section-team').offset().top - windowHeight;
  var distanceSectionQuotes = $('#section-quotes').offset().top - windowHeight;
  var distanceSectionMethodology = $('#section-methodology').offset().top - windowHeight;
  var distanceSectionOffice = $('#section-office').offset().top - windowHeight;

  function scrollAnim(){
    if ($window.scrollTop() >= distanceSectionTrip) {
      if (!$('#section-trip').hasClass('anim')) {
        $('#section-trip').addClass('anim');
        $('#section-trip .wrapLine').addClass('anim');
        sectionTripCarousselInit();
      }
    }
    if ($window.scrollTop() >= distanceSectionTeam) {
      if (!$('#section-team').hasClass('anim')) {
        $('#section-team').addClass('anim');
        $('#section-team .wrapLine').addClass('anim');
      }
    }
    if ($window.scrollTop() >= distanceSectionQuotes) {
      if (!$('#section-quotes').hasClass('anim')) {
        $('#section-quotes').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionMethodology) {
      if (!$('#section-methodology').hasClass('anim')) {
        $('#section-methodology').addClass('anim');
        $('#section-methodology .wrapLine').addClass('anim');
      }
    }

    if ($window.scrollTop() >= distanceSectionOffice) {
      if (!$('#section-office').hasClass('anim')) {
        $('#section-office').addClass('anim');
        sectionTeamCarousselInit();
      }
    }

  }

  $window.scroll(function() {

    scrollAnim();

  });




})









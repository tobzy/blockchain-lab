$('body').click(function(){
    $("footer .content .container-wrp .language .dropdown").fadeOut(250);
})
$("footer .content .container-wrp .language").click(function(event){
    event.stopPropagation();
  $("footer .content .container-wrp .language .dropdown").fadeToggle(250);
});

$('#section-team .wrapper .container-el .el .container-text .readmore').click(function (event) {
    let extra = $(this).parent().find('.extra-text')
    extra.toggle();
    if(extra.css('display') === 'inline'){
        $(this).text("Read less")
    }else{
        $(this).text("Read more")
    }
})
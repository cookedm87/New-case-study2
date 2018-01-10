/*-----------------------------------------------------------------------------------

FICTIONAL WEBSITE SCRIPT FILE

-----------------------------------------------------------------------------------*/

/*MENU DEVICE SCRIPT*/

/*When user clicks button toggle hiding and showing drop content*/

$("#mainNav").click(function(){
                        $("#mainMenu").slideToggle();
                    });

$("#mainMenu li").on("click", function(){
                        if($(window).width() < 1024){
                            $("#mainNav").click();
                        }
                    });

$(window).resize(function(){
    if($(window).width() < 1024) {
        $("#mainNav").removeAttr("style");
    }
});

/*-----------------------SMOOTH SCROLLING-------------------*/

$(function(){
   $('.navC a, .actionB a, .logoC a').bind('click', function(event){
      var $anchor = $(this);
       $('html, body').stop().animate({
           scrollTop: 
           $($anchor.attr('href')).offset().top - 100
       }, 1000);
       event.preventDefault();
   }); 
});

/*function navButton() {
	document.getElementById("mainMenu").classList.toggle("show");
}*/
// подключаем html5-блоки для старых браузеров
var e = ("article,aside,figcaption,figure,footer,header,hgroup,nav,section,time,main").split(',');
for (var i = 0; i < e.length; i++) {
	document.createElement(e[i]);
};

var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
    ua = navigator.userAgent,

    gestureStart = function () {
        viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    },

    scaleFix = function () {
      if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        document.addEventListener("gesturestart", gestureStart, false);
      }
    };
    

scaleFix();

	$(window).load(function() {
		window.setTimeout(function() {
			$('.wrap').addClass('loading');
		},1300);
		
	});    

$(document).ready(function() {
    
    if (is_touch_device()) {
        $('.h-action').addClass('touchBox');
    }    

//соц. иконки на пк
$('.share-toggle-button').on('click', function(e) { 
    e.preventDefault();
    if($(this).parent().parent().hasClass('share-hide')) {
        $(this).parent().parent().removeClass('share-hide').addClass('share-show');              
    }
    else {
        $(this).parent().parent().removeClass('share-show').addClass('share-hide');        
    }

});     

//открыть меню
$('.link-nav').on('click', function(e) { 
    
    if($(this).hasClass('openMenu')) {
        $('.menu__container').removeClass('menuActive');
        $('.menu__container').fadeOut();
        $(this).parent().removeAttr('style');        
        $(this).removeClass('openMenu');
    
    }
    else {
        $('.menu__container').fadeIn();  
        $('.menu__container').addClass('menuActive'); 
        $(this).parent().css({'z-index':'100'});
        $(this).addClass('openMenu');  
      
    }


});
//соц. иконки на мобильном
$('.ls_mob').on('click', function(e) { 
    if($(this).hasClass('openShare')) {
        $('.share-mobile').removeClass('sOpen');
        $(this).removeClass('openShare');
    }
    else {
        $(this).addClass('openShare');
        $('.share-mobile').addClass('sOpen');
    }
});   

//плавный переход по страницам
$('.lPage').on('click', function(e) { 
    var linkLocation = $(this).attr('href');
    $("body").addClass('fadeOutBody');        
    setTimeout(function() {	
        window.location = linkLocation;	 
    }, 400);  
});  

//селекты*/

$(".slct").on('click', function(fSelect){
 
       
    var selectID = $(this).parent().attr('id');    
	var dropBlock = $('#'+selectID).find('.drop');

	if( dropBlock.is(':hidden') ) {
    $('.drop').slideUp();
    $('.slct').removeClass('active');	   
       
		dropBlock.slideDown();
        $(this).addClass('active');
        
		$('#'+selectID+' .drop').find('div').on('click', function(){
			var selectResult = $(this).data("value");
            var selectResult2 = $(this).html();
			$('#'+selectID).find('input').val(selectResult);
			$('#'+selectID).find('.slct').html(selectResult2).removeClass('active');
			dropBlock.slideUp(); 
		});
	} else {
		dropBlock.slideUp();
        setTimeout("$('.slct').removeClass('active');", 250);
	}
	    fSelect.stopPropagation()      
	return false;
});
$(".drop").bind('click', function(fSelect){
    fSelect.stopPropagation()
});
$("body").bind('click', function(){
    $('.drop').slideUp();
    setTimeout("$('.slct').removeClass('active');", 250);
}); 

//показать еще посты
$('.postMore').on('click', function(e) { 
    
    e.preventDefault();
    
    var slidePost = $(this).attr('href').replace('#', '');
    var btnAction = $(this);
    
    if(slidePost == "page1Hide") {
        $(this).hide();
        var docHeight = $(document).height(); 
        var h1 = $('.page1Hide').height();
        var sliderHeight = $('#slider').height();       
        
        $('.wrap').addClass('page1Show');                       
        $('#wrap').css({'height':''+(docHeight+h1)+'px'});   
        $('#slider').css({'height':''+(sliderHeight+h1)+'px'}); 
        
        $('.scroll-pane').css({'height':''+(sliderHeight+h2)+'px'}); 
              
    }
    else if (slidePost == "page2Hide") {
        $(this).hide();
        var docHeight = $(document).height(); 
        var h2 = $('.page2Hide').height();
        var sliderHeight = $('#slider').height();
        
        $('.wrap').addClass('page2Show');                       
        $('#wrap').css({'height':''+(docHeight+h2)+'px'}); 
        $('#slider').css({'height':''+(sliderHeight+h2)+'px'}); 
        
        $('.scroll-pane2').css({'height':''+(sliderHeight+h2)+'px'}); 
        
    }
    else {
        $(this).hide();
        var docHeight = $(document).height(); 
        var h3 = $('.page3Hide').height();
        var sliderHeight = $('#slider').height();        
        
        $('.wrap').addClass('page3Show');                       
        $('#wrap').css({'height':''+(docHeight+h3)+'px'}); 
        $('#slider').css({'height':''+(sliderHeight+h3)+'px'});
        
        $('.scroll-pane3').css({'height':''+(sliderHeight+h2)+'px'}); 
    }
}); 
      

        
});


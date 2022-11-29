function is_touch_device() {
    return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
};

$(document).ready(function() {

$('#section').on('mousewheel', function(event) {
    
    if (event.deltaY > 0) {
        $('#prev1').click();  
    }
    else {
        $('#next1').click(); 
    }
    
});

//выборка фона по разрешениям   
var w = $(window).width();
var widthMin = 1024;

if (w<widthMin) {
    
    if (w <= 480) {
        var pictures = [
            { src : 'images/bg6x480.jpg'},
        	{ src : 'images/bg3x480.jpg'},
        	{ src : 'images/bg2x480.jpg'},
        ]; 
    }
    else {
        var pictures = [
            { src : 'images/bg6x768.jpg'},
        	{ src : 'images/bg3x768.jpg'},
        	{ src : 'images/bg2x768.jpg'},
        ];        
    }
    

}   
else {
    var pictures = [
        { src : 'images/bg6.jpg'},
    	{ src : 'images/bg3.jpg'},
    	{ src : 'images/bg2.jpg'},
    ];    
}      
          
       
       //следующий слайд
	   $('.btn-next').click(function(e) {

        if ($(this).hasClass('disable')){
            return false; 
        }    
        else {
			
		var container = $('#slider');
		var active = container.find('.slideActive');           
        var all = container.find('li');
        
        //pagination
		var pgBox = $('.pagination__box');
		var pgActive = pgBox.find('.active');           
        var allPg = pgBox.find('li');         
    

		if (all.index(active) + 1 == all.length) {
            
            /*LOCATION*/
            var numSlide = all.index(active) + 1;                                                             
            var linkLocation = $('#slider li:nth-child('+numSlide+')').attr('data-location');
            
            $("body").addClass('fadeOutBody');
            
				setTimeout(function() {	
				   window.location = linkLocation;	 
				}, 400);                    
                                                  
            
		} else {  
		    $('.btn-prev').removeClass('btn-disabled');
            //активный слайд  
            var next = active.next().addClass('slideActive').prev().removeClass('slideActive'); 
            
            //высота слайда/документа
            var heightSlide = active.next().height();            
            $('#slider').css({'height':''+heightSlide+'px'});
            
            var docHeight = $(document).height();            
            $('#wrap').css({'height':''+docHeight+'px'});
            
            //активный pagination
            pgActive.next().addClass('active').prev().removeClass('active'); 
            
            /*HASH*/             
            var slideHash = active.next().attr('data-hash');
            document.location.hash = slideHash;   
            
            var $body = $('body');    
            $body.addClass(slideHash);
            $body.removeAttr('class').addClass(slideHash);	
            
                        
            //смена картинки
            var pageImg = active.next().attr('data-img');
				var bg = $('.bg span');
				bg.css({
					'background-image': "url("+pictures[pageImg].src + ")",    
					  '-webkit-animation-name': 'fadeIn',
                      '-moz-animation-name': 'fadeIn',
                      '-ms-animation-name': 'fadeIn',                      
					  'animation-name': 'fadeIn '    				
				});
			
				setTimeout(function() {
							bg.css({
								  '-webkit-animation-name': 'fade',
                                  '-moz-animation-name': 'fade',
                                  '-ms-animation-name': 'fade',                                   
								  'animation-name': 'fade '     				
							});			
							$('.wrap').css({
								'background-image': "url(" + pictures[pageImg].src + ")"
							});				
				}, 800);	                        
                                                                 
		}   
        
        //TimeOut
        $('.btn-next').addClass("disable"); 
        $('.btn-prev').addClass("disable"); 
        
        setTimeout(function() {
            $('.btn-next').removeClass("disable"); 
            $('.btn-prev').removeClass("disable");             
        }, 1000); 
        
        }      
                          
});
        //предыдущий слайд    
	   $('.btn-prev').click(function(e) {

        if ($(this).hasClass('disable')){
            return false; 
        }    
        else {
			
        //slider   
		var container = $('#slider');
		var active = container.find('.slideActive');           
        var all = container.find('li');
        
        //pagination
		var pgBox = $('.pagination__box');
		var pgActive = pgBox.find('.active');           
        var allPg = pgBox.find('li');         
        

		if (all.index(active) == 0) {
                       
            var numSlide = all.index(active);                                                                                     
            var linkLocation = $('#slider li:first').attr('data-location');
            $("body").addClass('fadeOutBody');
            
				setTimeout(function() {	
				   window.location = linkLocation;	 
				}, 400);                                      
            
		} 
        else if (all.index(active) == 1) {
            $('.btn-prev').addClass('btn-disabled');
            
            //активный слайд  
            next = active.prev().addClass('slideActive').next().removeClass('slideActive'); 
              
            
            //высота слайда/документа
            var heightSlide = active.prev().height();            
            $('#slider').css({'height':''+heightSlide+'px'});
            
            var docHeight = $(document).height();            
            $('#wrap').css({'height':''+docHeight+'px'});                        
              
            //активный pagination
            pgActive.prev().addClass('active').next().removeClass('active'); 
                           
            /*HASH*/             
            var slideHash = active.prev().attr('data-hash');
            document.location.hash = slideHash;   
            
            var $body = $('body');    
            $body.addClass(slideHash);
            $body.removeAttr('class').addClass(slideHash);	   
            
            //смена картинки
            var pageImg = active.prev().attr('data-img');
				var bg = $('.bg span');
				bg.css({
					'background-image': "url("+pictures[pageImg].src + ")",    
					  '-webkit-animation-name': 'fadeIn',
                      '-moz-animation-name': 'fadeIn',
                      '-ms-animation-name': 'fadeIn',                      
					  'animation-name': 'fadeIn '   				
				});
			
				setTimeout(function() {
							bg.css({
								  '-webkit-animation-name': 'fade',
                                  '-moz-animation-name': 'fade',
                                  '-ms-animation-name': 'fade',                                   
								  'animation-name': 'fade '     				
							});			
							$('.wrap').css({
								'background-image': "url(" + pictures[pageImg].src + ")"
							});				
				}, 800);              
        }
        
        else {		  
            //активный слайд  
            next = active.prev().addClass('slideActive').next().removeClass('slideActive'); 
              
            
            //высота слайда/документа
            var heightSlide = active.prev().height();            
            $('#slider').css({'height':''+heightSlide+'px'});
            
            var docHeight = $(document).height();            
            $('#wrap').css({'height':''+docHeight+'px'});                        
              
            //активный pagination
            pgActive.prev().addClass('active').next().removeClass('active'); 
                           
            /*HASH*/             
            var slideHash = active.prev().attr('data-hash');
            document.location.hash = slideHash;   
            
            var $body = $('body');    
            $body.addClass(slideHash);
            $body.removeAttr('class').addClass(slideHash);	   
            
            //смена картинки
            var pageImg = active.prev().attr('data-img');
				var bg = $('.bg span');
				bg.css({
					'background-image': "url("+pictures[pageImg].src + ")",    
					  '-webkit-animation-name': 'fadeIn',
                      '-moz-animation-name': 'fadeIn',
                      '-ms-animation-name': 'fadeIn',                      
					  'animation-name': 'fadeIn '    				
				});
			
				setTimeout(function() {
							bg.css({
								  '-webkit-animation-name': 'fade',
                                  '-moz-animation-name': 'fade',
                                  '-ms-animation-name': 'fade',                                   
								  'animation-name': 'fade '   				
							});			
							$('.wrap').css({
								'background-image': "url(" + pictures[pageImg].src + ")"
							});				
				}, 800);                      
                                                                    
		}
        
        //TimeOut
        $('.btn-next').addClass("disable"); 
        $('.btn-prev').addClass("disable"); 
        
        setTimeout(function() {
            $('.btn-next').removeClass("disable"); 
            $('.btn-prev').removeClass("disable");             
        }, 1000); 
        
        }         
        
});
    
    
      
    //переключение по pagination  
    $('.pagination__box').on('click', 'li:not(.active)', function() {  
        
        if ($('.btn-next').hasClass('disable')){
            return false; 
        }    
        else {         
        
        $(this).addClass('active').siblings().removeClass('active');
    
        var pageHash = $('.pagination__box .active').attr('data-hash');
        document.location.hash = pageHash;   
        
        

        var pgNumSlide = $('.pagination__box .active').attr('data-slide');
        
        var pgSlideActive = $('#slider li:nth-child('+pgNumSlide+')');
        
        $('#slider').find('.slideActive').removeClass('slideActive');  
        
        $('#slider li:nth-child('+pgNumSlide+')').addClass('slideActive');
        
        //если активный первый слайд меняем вид кнопки "Предыдущий"
        if (pgNumSlide == 1) {
            $('.btn-prev').addClass('btn-disabled');
        }
        else {
            $('.btn-prev').removeClass('btn-disabled');
        }
        
        
        
        
            //высота слайда/документа
            var heightSlide = $('#slider li:nth-child('+pgNumSlide+')').height();            
            $('#slider').css({'height':''+heightSlide+'px'});
            
            var docHeight = $(document).height();            
            $('#wrap').css({'height':''+docHeight+'px'});         
        
        
        var $body = $('body');    
        $body.addClass(pageHash);
        $body.removeAttr('class').addClass(pageHash);    
        
            //смена картинки
            var pageImg = pgNumSlide-1;
				var bg = $('.bg span');
				bg.css({
					'background-image': "url("+pictures[pageImg].src + ")",    
					  '-webkit-animation-name': 'fadeIn',
                      '-moz-animation-name': 'fadeIn',
                      '-ms-animation-name': 'fadeIn',                      
					  'animation-name': 'fadeIn ' 	    				
				});
			
				setTimeout(function() {
							bg.css({
								  '-webkit-animation-name': 'fade',
                                  '-moz-animation-name': 'fade',
                                  '-ms-animation-name': 'fade',                                   
								  'animation-name': 'fade '   				
							});			
							$('.wrap').css({
								'background-image': "url(" + pictures[pageImg].src + ")"
							});				
				}, 800);    
                
             
             
        //TimeOut
        $('.btn-next').addClass("disable"); 
        $('.btn-prev').addClass("disable"); 
        
        setTimeout(function() {
            $('.btn-next').removeClass("disable"); 
            $('.btn-prev').removeClass("disable");             
        }, 1000);   
        
        }                             
     
});   
    
                           

});
    
    $(window).load(function() {
        
var w = $(window).width();
var widthMin = 1024;

if (w<widthMin) {
    if (w <= 480) {
        var pictures = [
            { src : 'images/bg6x480.jpg'},
        	{ src : 'images/bg3x480.jpg'},
        	{ src : 'images/bg2x480.jpg'},
        ]; 
    }
    else {
        var pictures = [
            { src : 'images/bg6x768.jpg'},
        	{ src : 'images/bg3x768.jpg'},
        	{ src : 'images/bg2x768.jpg'},
        ];        
    }
}   
else {
    var pictures = [
        { src : 'images/bg6.jpg'},
    	{ src : 'images/bg3.jpg'},
    	{ src : 'images/bg2.jpg'},
    ];    
}   
    
        //делаем активный блок по хэшу
        var hash = document.location.hash.replace('#', '');
        
             
        if (hash != 0){   
            //активный слайд
            $('#slider').find('li.slideActive').removeClass('slideActive');            
            
            var activeSlide = $('#slider .'+hash).addClass('slideActive');
            
            //высота слайда
            var heightSlide = activeSlide.height();
            //высота слайдера
            $('#slider').css({'height':''+heightSlide+'px'});             
            
            //получаем порядковый номер картинки у активного слайда
            var pageImg = activeSlide.attr('data-img');
            
            //боди добавляем класс
            $('body').addClass(hash);    
           
            //меняем фон, на фон активного слайда           
				var bg = $('.bg span');
				bg.css({
					'background-image': "url("+pictures[pageImg].src + ")",    
					  '-webkit-animation-name': 'fadeIn',
                      '-moz-animation-name': 'fadeIn',
                      '-ms-animation-name': 'fadeIn',                      
					  'animation-name': 'fadeIn '     				
				});
			
            //если активный слайд не первый, то удаляем у кнопки "Предыдущий" класс неактивности
            if (pageImg != 0) {
                $('.btn-prev').removeClass('btn-disabled');
            }
            //немного притормаживаем процесс
				setTimeout(function() {
							bg.css({
								  '-webkit-animation-name': 'fade',
                                  '-moz-animation-name': 'fade',
                                  '-ms-animation-name': 'fade',                                   
								  'animation-name': 'fade '    				
							});			
							$('.wrap').css({
								'background-image': "url(" + pictures[pageImg].src + ")"
							});				
				}, 800);  
                            
            
            //активный pagination
            $('.pagination__box').find('li.active').removeClass('active');
            $('.pagination__box .'+hash).addClass('active');            
        }
        else {
            //выставлем высоту по первому слайду
            var heightSlide = $('#slider li:first').height();      
            $('#slider').css({'height':''+heightSlide+'px'});              
        }
        
    });
    
window.addEventListener("resize", widthFunction);
window.addEventListener("load", widthFunction);

/*widthFunction*/
function widthFunction() {
var w = $(window).width();

var widthMin = 1024;
var bodyHeight = document.getElementById('wrap');


if (w<widthMin) {

    var h = $(document).height();
    
    bodyHeight.removeAttribute('style');
    bodyHeight.style.height = h+'px';
}   
else {
    bodyHeight.removeAttribute('style');
}
}/*end widthFunction*/


	function initbg() {

    var windowwidth = $(window).width();
    var initbg;
    
    var w1 = $(".bg1").width();
    var w2 = $(".bg2").width();
    var w3 = $(".bg3").width();
    var w4 = $(".bg4").width();
    var w5 = $(".bg5").width();
    

    var pos1 = 0;
    var pos2 = w1;
    var pos3 = (w1+w2);
    var pos4 = (pos3+w3);
    var pos5 = (pos4+w4);	   
       
		var backpos, bgparam;

		bgparam = $('.bg span').css({
			'background-size': windowwidth + "px auto", 

		});
        
        $('.bg1 span').css({
			'background-position': pos1 +"px 50%", 
		}); 
        
        $('.bg2 span').css({
			'background-position': "-"+ pos2 + "px 50%", 
		});
        $('.bg3 span').css({
			'background-position': "-"+ pos3 + "px 50%", 
		});
        $('.bg4 span').css({
			'background-position': "-"+ pos4 + "px 50%", 
		});
        $('.bg5 span').css({
			'background-position': "-"+ pos5 + "px 50%", 
		});                                     
    
	}
    
window.addEventListener("resize", initbg);
window.addEventListener("load", initbg);    
   
    /*TOUCH*/
var myElement = document.getElementById('section');
var mc = new Hammer(myElement);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
mc.on("panleft panright panup pandown", function(ev) {
    
	if (ev.type == "panup") {
            var w = $(window).width();                                                           
            if (w >= 1024) {
                $('#next1').click(); 
            } 	
	}
  
	if (ev.type == "pandown") {
            var w = $(window).width();                                                           
            if (w >= 1024) {
                $('#prev1').click();
            } 	
	}  
	
	if (ev.type == "panleft") {
            var w = $(window).width();                                                           
            if (w <= 1023) {
                $('#next1').click(); 
            } 	
	}  

	if (ev.type == "panright") {
            var w = $(window).width();                                                           
            if (w <= 1023) {
                $('#prev1').click();
            } 	
	}  	
    
});

//Функция вертикального выравнивания элементов страницы
function autoFunction() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();   
    
    var minWindowWidth = 1023; 
    
    if (windowWidth > minWindowWidth) {
    
    //pagination
    var pagination = document.getElementById('pagination');
    var paginationHeight = $(pagination).height();
    $('#pagination').css({'top': (windowHeight-paginationHeight)/2 + "px",});      
    
    //slideTtext 
    var slideTxt = document.getElementById('slideTxt'); 
    var sliderContainer = document.getElementById('slider');
    var sliderHeight = $(sliderContainer).height();
    $('#slideTxt').css({'margin': (windowHeight-sliderHeight)/2 + "px 0 0",});  
    
    //coachBtn
    var coachBtn = document.getElementById('coachBtn');
    var coachTopLine = document.getElementById('coachTopLine');
    
    var coachBottomLine = document.getElementById('coachBottomLine');
    
    var coachMore = document.getElementById('coach__more');
    var coachMoreHeight = $(coachMore).height();
    
    
        if (windowHeight > 768) {
            var coachBtnHeight = ($(coachBtn).height())+47*2;
            $('#coachBtn').css({'marginTop': ((windowHeight-coachBtnHeight)/2)-137 + "px",}); 
              
            var coachTopLineStyle = ((windowHeight-coachBtnHeight)/2)-137;        
            $('#coachTopLine').css({'height': coachTopLineStyle + "px", 'top': "-"+ (coachTopLineStyle+1.5) + "px",});  
            
            
            $('#coachBottomLine').css({'height': ((windowHeight-coachBtnHeight)/2)-coachMoreHeight  + "px", 'bottom': "-"+ ((((windowHeight-coachBtnHeight)/2)-coachMoreHeight)+1.5) + "px",});  
                                     
        }
        else {
            var coachBtnHeight = ($(coachBtn).height())+26*2;
            $('#coachBtn').css({'marginTop': ((windowHeight-coachBtnHeight)/2)-137 + "px",}); 
            
            var coachTopLineStyle = ((windowHeight-coachBtnHeight)/2)-137;        
            $('#coachTopLine').css({'height': coachTopLineStyle + "px", 'top': "-"+ (coachTopLineStyle+1.5) + "px",});  
            
            $('#coachBottomLine').css({'height': ((windowHeight-coachBtnHeight)/2)-coachMoreHeight  + "px", 'bottom': "-"+ ((((windowHeight-coachBtnHeight)/2)-coachMoreHeight)+1.5) + "px",});             
        }
    
    
    }
    else {
        //если ширина меньше 1024 сбрасываем стили
        var pagination = document.getElementById('pagination');
        $(pagination).removeAttr('style');
        
        var slideTxt = document.getElementById('slideTxt'); 
         $(slideTxt).removeAttr('style');
        
        var coachBtn = document.getElementById('coachBtn');
        $(coachBtn).removeAttr('style');  
        
        var coachBottomLine = document.getElementById('coachBottomLine');     
        $(coachBottomLine).removeAttr('style');  
         
    }    
}

window.addEventListener("load", autoFunction);
window.addEventListener("resize", autoFunction);


function autoFun2() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();   
    
    //slideTtext 
    var imgLoader = document.getElementById('imgLoader');     
    var minWindowWidth = 1024; 


if (windowWidth<minWindowWidth) {    

    if (windowWidth <= 480) {
        $(imgLoader).html('<img src="images/bg6x480.jpg" alt="#" /><img src="images/bg2x480.jpg" alt="#" /><img src="images/bg3x480.jpg" alt="#" />');
    }
    else {
        $(imgLoader).html('<img src="images/bg6x768.jpg" alt="#" /><img src="images/bg2x768.jpg" alt="#" /><img src="images/bg3x768.jpg" alt="#" />');       
    }
    
}   
else {
    $(imgLoader).html('<img src="images/bg6.jpg" alt="#" /><img src="images/bg2.jpg" alt="#" /><img src="images/bg3.jpg" alt="#" />');       
}       

    
    
}
window.addEventListener("load", autoFun2);
window.addEventListener("resize", autoFun2);

/*Функция автопозиционирования линии в заголовке в зависимости от количества текста*/
function autoPosition() {    
    
    //Общая длина заголовка
    var pageTitle = document.getElementById('pageTitle');     
    var pageTitleWidth = $(pageTitle).width();
    
    //Длина текста заголовка
    var pageTitleTxt = document.getElementById('pageTitleTxt');     
    var pageTitleTxtWidth = $(pageTitleTxt).width();    
    
    //Длина текста ссылки в заголовке
    var pageTitleLink = document.getElementById('pageTitleLink');     
    var pageTitleLinkWidth = $(pageTitleLink).width();   
         
    //alert(pageTitleTxtWidth);
    //alert(pageTitleLinkWidth);
    
    $('.h1-line').css({'left': (pageTitleTxtWidth + ((pageTitleWidth-pageTitleTxtWidth-pageTitleLinkWidth)/2))-12 + "px",});
    
    
    
}
window.addEventListener("load", autoPosition);
window.addEventListener("resize", autoPosition);



window.addEventListener("orientationchange", function() {
    var docH = $(document).height();  
    $('#wrap').css({'height':''+docH+'px'});
    
});


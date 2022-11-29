function is_touch_device() {
    return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
};

$(document).ready(function(){
    $('.scroll-pane').jScrollPane({showArrows: true}); 
    
    

$('#section').on('mousewheel', function(event) {
    
    
    	if (event.deltaY > 0) {
	   
            var scrollBoxClass = $("#scrollSwipe").attr('class');            
            if (scrollBoxClass == 'noSwipe') {
                return false;
            }
            else {
                
            $("body").addClass('fadeOutBody');            
				setTimeout(function() {	
				   window.location = "problem-solving.html";	 
				}, 400);                               
            }                     
                     
        }
        else {      

            var scrollBoxClass = $("#scrollSwipe").attr('class');            
            if (scrollBoxClass == 'noSwipe') {
                return false;
            }
            else {
            $("body").addClass('fadeOutBody');            
				setTimeout(function() {	
				   window.location = "blog.html";	 
				}, 400);  
            }             
    }    
                            
});

    //отменяем общий скролл страницы на тач устройствах при скролле на вертикальной области скролла
    
    $(".scrollContent").hover(
      function () {
        $('#scrollSwipe').addClass('noSwipe');
      },
      function () {
        $('#scrollSwipe').removeClass('noSwipe');
      }
    );
         
}); /* END $(document)*/

    /*TOUCH*/
    
var myElement = document.getElementById('section');
var scrollBox = document.getElementById('scrollSwipe'); 
var mc = new Hammer(myElement);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
mc.on("panleft panright panup pandown", function(ev) {
    
	if (ev.type == "panup") {
            var w = $(window).width();                                                           
            if (w >= 1024) {
    			var scrollBoxClass = $(scrollBox).attr('class');      			
    			if (scrollBoxClass == 'noSwipe') {
    				return false;
    			}
    			else {
                $("body").addClass('fadeOutBody');            
    				setTimeout(function() {	
    				   window.location = "blog.html";	 
    				}, 400); 
    			} 
            } 	
	}
  
	if (ev.type == "pandown") {
            var w = $(window).width();                                                           
            if (w >= 1024) {
    			var scrollBoxClass = $(scrollBox).attr('class');    
    			
    			if (scrollBoxClass == 'noSwipe') {
    				return false;
    			}
    			else {
                    $("body").addClass('fadeOutBody');            
        				setTimeout(function() {	
        				   window.location = "problem-solving.html";	 
        				}, 400);  
    			}
            } 	
	}  
	
	if (ev.type == "panleft") {
            var w = $(window).width();                                                           
            if (w <= 1023) {
                $("body").addClass('fadeOutBody');            
    				setTimeout(function() {	
    				   window.location = "blog.html";	 
    				}, 400); 
            } 	
	}  

	if (ev.type == "panright") {
            var w = $(window).width();                                                           
            if (w <= 1023) {
                $("body").addClass('fadeOutBody');            
    				setTimeout(function() {	
    				   window.location = "problem-solving.html";	 
    				}, 400); 
            } 	
	}     
});    

//отмена свайпа по блоку с вертикальным свайпом 1
var myElement1 = document.getElementById('scrollContent1');
var mc1 = new Hammer(myElement1);
mc1.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });

mc1.on("panup pandown", function(ev) {

	if (ev.type == "panup") {
            var w = $(window).width();                                                           
            if (w >= 1024) {
                $('#scrollSwipe').addClass('noSwipe');
                
                setTimeout(function() {
                    $('#scrollSwipe').removeClass('noSwipe');
                }, 200);                  
            }  	
	}
  
	if (ev.type == "pandown") {
            var w = $(window).width();                                                           
            if (w >= 1024) {
                $('#scrollSwipe').addClass('noSwipe');
                
                setTimeout(function() {
                    $('#scrollSwipe').removeClass('noSwipe');
                }, 200);                  
            } 	
	}  

});
    

//Функция вертикального выравнивания элементов страницы
function autoFunction() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();   
    
    var minWindowWidth = 1023; 

            var activeSlide = $('#slider .slideActive');
            
            //высота слайда
            var heightSlide = activeSlide.height();
            //высота слайдера
            $('#slider').css({'height':''+heightSlide+'px'});            
    
    if (windowWidth > minWindowWidth) {
        
    
    //slideTtext 
    var slideTxt = document.getElementById('slideTxt'); 
    var sliderContainer = document.getElementById('slider');
    var sliderHeight = $(sliderContainer).height();
    $('#slideTxt').css({'margin': ((windowHeight-sliderHeight)/2)-20 + "px 0 0",});
    $('#simpleLine').css({'top': ((windowHeight-sliderHeight)/2) + "px",});
      
    
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
            
            $('#slideTxt').css({'margin': (windowHeight-sliderHeight)/2 + "px 0 0",}); 
            
            $('#simpleLine').css({'top': (windowHeight-sliderHeight)/2 + "px",});              
        }
    
    
    }
    else {
        
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

window.addEventListener("load", widthFunction);
window.addEventListener("resize", widthFunction);


function autoFun2() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();   
    
    //slideTtext 
    var imgLoader = document.getElementById('imgLoader');     
    var minWindowWidth = 1024; 


if (windowWidth<minWindowWidth) {    

    if (windowWidth <= 480) {
        $(imgLoader).html('<img src="images/bg14x480.jpg" alt="#" />');
    }
    else {
        $(imgLoader).html('<img src="images/bg14x768.jpg" alt="#" />');       
    }
    
}   
else {
    $(imgLoader).html('<img src="images/bg14.jpg" alt="#" />');       
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



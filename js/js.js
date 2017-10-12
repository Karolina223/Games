$(document).ready(function() {
    
   var NavY = $('.navbar').offset().top;
    
    var stickyNav = function(){
      var ScrollY = $(window).scrollTop();
        
        if (ScrollY > NavY) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    };
    
    stickyNav();
    
    $(window).scroll(function() {
       stickyNav(); 
    });
    
$('#index').each(function(){
    $(this).click(function(){ 
        $("html, body").animate({ scrollTop: $('.top').offset().top }, 500);  
    });
});
    
    
$('#contact').each(function(){
    $(this).click(function(){ 
        $("html, body").animate({ scrollTop: $('#cont').offset().top }, 500);  
    });
});
    
    
$(window).scroll(function() {
  if ($(document).scrollTop() > 700) {
    $('.navbar').addClass('color-change');
  } else {
    $('.navbar').removeClass('color-change');
  }
});
    
});
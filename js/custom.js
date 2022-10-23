$(function(){
	$.scrollIt({
	  upKey: 38,             // key code to navigate to the next section
	  downKey: 40,           // key code to navigate to the previous section
	  easing: 'linear',      // the easing function for animation
	  scrollTime: 400,       // how long (in ms) the animation takes
	  activeClass: 'active', // class given to the active nav element
	  onPageChange: null,    // function(pageIndex) that is called when page is changed
	  topOffset: 0           // offste (in px) for fixed top navigation
	});
});

$(document).ready(function(){
var h = new JustGage({
    id: "htmlGauge",
    value: 85,
    min: 0,
    max: 100
  });
var c = new JustGage({
    id: "cssGauge",
    value: 80,
    min: 0,
    max: 100,
    levelColors : ["#1758a7"]
  });
var b = new JustGage({
    id: "bootGauge",
    value: 90,
    min: 0,
    max: 100,
    levelColors : ["#5b4386"]
  });
var j = new JustGage({
    id: "jqueryGauge",
    value: 75,
    min: 0,
    max: 100,
    levelColors : ["#000"]
  });
var p = new JustGage({
    id: "photoshopGauge",
    value: 65,
    min: 0,
    max: 100,
    levelColors : ["#8dc1fc"]
  });
var a = new JustGage({
    id: "angularGauge",
    value: 50,
    min: 0,
    max: 100,
    levelColors : ["#e23237"]
  });
    
 /*var target = $(".animate-up").offset().top;
var interval = setInterval(function() {
    if ($(window).scrollTop() >= target - 600) {
        $(".animate-up").addClass('animated');
        clearInterval(interval);
    }
}, 2500);   */
    
    
$(".navbar-nav li a").click(function(event) {
   if($('.navbar-nav li a').hasClass('active')) {
		$('.navbar-nav li').removeClass('active');
        $(this).parent().addClass('active');
		var myClass = $(this).parent().attr("class");
     }
});
});
    
    
    
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    $('.landingPageOuter,.aboutPage,.skillPage,.workPage,.contactPage').each(function() {
        var topDistance = $(this).offset().top;
		var menuClass = $(this).attr("class");
        if ( (topDistance) < scrollTop ) {
			if(menuClass == 'landingPageOuter'){
				$('.navbar-nav li').removeClass('active');
				
				$('.blockWrap').addClass('animated bounceInLeft');
				$('.aboutTitle').addClass('animated infinite wobble');
			}
            if(menuClass == 'aboutPage'){
				$('.navbar-nav li').removeClass('active');
				$('.navbar-nav li.aboutLink').addClass('active');
				
				$('.skillTitle').addClass('animated infinite wobble');
				$('.skillBars').addClass('animated bounceInLeft');
				$('.skillDetails').addClass('animated rubberBand');
			}
			if(menuClass == 'skillPage'){
				$('.navbar-nav li').removeClass('active');
				$('.navbar-nav li.skillLink').addClass('active');
				
				$('.workTitle').addClass('animated infinite wobble');
				$('.polaroids').addClass('animated tada');
			}
			if(menuClass == 'workPage'){;
				$('.navbar-nav li').removeClass('active');
				$('.navbar-nav li.workLink').addClass('active');
				
				$('.contactTitle').addClass('animated infinite wobble');
				$('.contactTitle, .contactLeft,.gmapHolder').addClass('animated tada');
				$('.reachOut, .photoSection').addClass('animated rubberBand');
			}
			if(menuClass == 'contactPage'){
				$('.navbar-nav li').removeClass('active');
				$('.navbar-nav li.contactLink').addClass('active');
			}
        }
    });

});
    






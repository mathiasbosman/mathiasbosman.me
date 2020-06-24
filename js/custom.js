$(document).ready(function(){

	////////////////	
	//VARIABLES
	////////////////
	const view = $(window),
			body = $('body');

	////////////////
	//SKILLS ANIMATION
	////////////////
	$('ul#skills').addClass("ready");
	$('ul#skills li').each(function(){
		const i = $(this).index();
		$(this).delay(100 * i).animate({right:"0%"},1000,function(){
			$(this).children('span').fadeIn(600);
		});	
	});

	////////////////
	//CLONE NAME AND SOCIAL BUTTONS
	////////////////
	$('#titleName, #socialIcons').clone().appendTo('#sticker');
	
	////////////////
	//RESPONSIVE CHECK
	///////////////
	function responsive(){
		if(view.width() < 820){
			body.addClass('respond');
		} else {
			body.removeClass('respond');
		}
	}
	responsive();
	
	////////////////
	//WINDOW SCROLL
	////////////////
	view.scroll(function(){
		//SHOW/HIDE TOP PANEL
		if(view.scrollTop() > 140){
			$('#sticker').stop().animate({top:"0"},500);
		} else {
			$('#sticker').stop().animate({top:"-60px"},500);
		}
		
		//PARALLAX BACKGROUND STUFF
		const scrollPosition = $(window).scrollTop() * .25;
		body.css({backgroundPosition:'0px -'+scrollPosition+'px'});
	});
		
	////////////////
	//WINDOW RESIZE
	///////////////
	view.resize(function(){ responsive(); });
	
	////////////////	
	//WINDOW LOAD
	////////////////
	view.on('load', function() { responsive(); });

});
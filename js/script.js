$(document).ready(function(){
	$('#bar').click(function () {
		$('#bar').toggleClass('bar_open')
		$('#menu').slideToggle();			
	});
	
	$('#menu a').click(function(){
    targetTop = $($(this).attr('href')).position().top-headerH; 
    $('html,body').animate({scrollTop:targetTop},700);
	});

	var scrollTime;
	function checkHeader(){
		if( $(document).scrollTop() >= $('header').outerHeight() ){
			$('header').addClass('fixed');
			
		}
		if( $(document).scrollTop() == 0 ){
			$('header').removeClass('fixed');
			// $('#banner').css('margin',0);
		}
	}
	var headerH = $('header').outerHeight();
	$('#banner').css('margin-top',headerH);
	checkHeader();
	$(window).scroll(function(){
		clearTimeout(scrollTime);
		scrollTime = setTimeout(function(){
			checkHeader();
			console.log(headerH);
		},100);
	});

	var wdth=$(window).width();
	function chH() {
		wdth=$(window).width();
		wdthDiv=$('#banner>div').width();
		// console.log(wdth);
		if(wdth > 600){
			$('.h61').css("height", wdth * 0.615);
			$('.h60').css("height", wdth * 0.6);
		}else{
			$('.h61').css("height", wdth * 1.67);
			$('.h60').css("height", wdth);
			$('#business').css("height", wdth * 1.3 + 280);
			$('#products').css("height", wdth * 1.4);
		}
		$('#banner>div').css("height", wdthDiv);
	}
	chH();
	$(window).resize(function(){
		headerH = $('header').outerHeight();
		$('#banner').css('margin-top',headerH);
		chH();
	});


	var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    live: true
  });
  wow.init();
});
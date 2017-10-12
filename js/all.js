

$(document).ready(function() {
	// fullPage initialize
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage','forthPage','fifthPage','sixthPage'],
		menu: '#myMenu',
		// -scrollBar: true才可讓下面logo change偵測到視窗滾動
		scrollBar: true,
		// -autoScrolling: true(為預設）滾一下自動滾至下一個section
		// autoScrolling: false

	});
	// fullPage偵測視窗寬度，小於768關閉autoScrolling
	if ($(window).width() < 768){
		
		$.fn.fullpage.setResponsive(true);
	}
	



	// owl-carousel initialize
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText:[],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	        	item:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})


	// logo change
	$(window).scroll(function(){
		var scrollDistance  = $(window).scrollTop();
		var logo = $('.navbar__logo');
		if (scrollDistance > 80){
			logo.removeClass('ontheTop');
		}else{
			logo.addClass('ontheTop');
		};
	})



	// rellax initialize
	if ($(window).width() > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
});
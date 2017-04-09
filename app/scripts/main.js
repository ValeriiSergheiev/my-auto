$(document).ready(function() {
	
	$('.lang li').click(function() {
		$(this).addClass('active-yellow').siblings().removeClass('active-yellow');
	});

	$('.menu li').click(function() {
		$(this).addClass('menu-active').siblings().removeClass('menu-active');
	});

	//Mobile menu
	$('.mob-menu-btn').click(function(event) {
		$('.menu').slideToggle('fast');
		$('.mob-menu-btn button').toggleClass('is-active');
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.menu').show();
			$('.mob-menu-btn').hide();
		} 
		else {
			$('.menu').hide();
			$('.mob-menu-btn').show();
			$('.mob-menu-btn button').removeClass('is-active');
		};
	});

	//Select menu
	$('.common-filter select').niceSelect();


});
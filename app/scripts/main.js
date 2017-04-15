$(document).ready(function() {

	new WOW().init();

	//Remove hover on touch devices
	var touch = 'ontouchstart' in document.documentElement
	|| navigator.maxTouchPoints > 0
	|| navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
    	for (var si in document.styleSheets) {
    		var styleSheet = document.styleSheets[si];
    		if (!styleSheet.rules) continue;

    		for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
    			if (!styleSheet.rules[ri].selectorText) continue;

    			if (styleSheet.rules[ri].selectorText.match(':hover')) {
    				styleSheet.deleteRule(ri);
    			}
    		}
    	}
    } catch (ex) {}
  }
	//End Remove hover on touch devices
	
	$('.lang li').click(function() {
		$(this).addClass('active-yellow').siblings().removeClass('active-yellow');
	});

	$('.menu li').click(function() {
		$(this).addClass('menu-active').siblings().removeClass('menu-active');
	});

	$('.color-select li').click(function() {
		$(this).addClass('color-select-active').siblings().removeClass('color-select-active');
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
			$('.search-result').show();
		} 
		else {
			$('.menu').hide();
			$('.mob-menu-btn').show();
			$('.mob-menu-btn button').removeClass('is-active');
			$('.search-result').hide();
		};
	});

	//Select menu
	$('.common-filter select, .catalog-filter select, .sort-by-price').niceSelect();

	//ScrollTop button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	/*//Offcanvas Top offset
	var canvas_top = $('#catalog-main').offset().top;
	//$('.navbar-offcanvas').css('top', canvas_top);

	$(window).resize(function() {
		canvas_top = $('#catalog-main').offset().top;
		//$('.navbar-offcanvas').css('top', canvas_top);
	});*/

	//Offcanvas events
	$('.offcanvas-close').click(function() {
		$('#js-bootstrap-offcanvas').trigger('offcanvas.close');
	});

	$('.navbar-offcanvas').on('shown.bs.offcanvas', function () {
		$('.navbar-layer').fadeIn('15ms');
	});

	$('.navbar-offcanvas').on('hidden.bs.offcanvas', function () {
		$('.navbar-layer').fadeOut('15ms');
	});

	//Filter button
	$('.refine-filter-btn a').click(function(event) {
		event.preventDefault();
		$('.search-result').slideToggle('fast');
	});

	//Catalog accordion
	$('.toggle-btn').click(function(event) {
		event.preventDefault();
		$(this).siblings('.catalog-filter').slideToggle('fast');
		$(this).toggleClass('filter-open');
	});


});
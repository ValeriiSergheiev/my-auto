$(document).ready(function() {

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
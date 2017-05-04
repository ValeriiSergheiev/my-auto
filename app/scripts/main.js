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

	$('.account-sidebar-menu li').click(function() {
		$(this).find('a').addClass('account-menu-active');
		$(this).siblings().find('a').removeClass('account-menu-active');
	});

	$('.color-select li').click(function() {
		//$(this).addClass('color-select-active').siblings().removeClass('color-select-active');
		$(this).toggleClass('color-select-active');
	});

	$('.add-ad-color-select-btn').click(function(event) {
		event.preventDefault();
		$('.add-ad-color-select').slideToggle('fast');
	});

	$('.add-ad-color-select li').click(function() {
		$(this).addClass('color-select-active').siblings().removeClass('color-select-active');
		//$(this).toggleClass('color-select-active');
		var carColor = $(this).css('background-color');
		$('.add-ad-color-select').fadeOut('fast');
		$('.add-ad-color-select-btn span:first-child').css('background', carColor);
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
	$('.common-filter select, .catalog-filter select, .sort-by-price, .nice-select-common').niceSelect();

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

	//Tabs
	$('#ttTabs li').click(function(event) {
		$(this).find('i').addClass('active-yellow');
		$(this).siblings().find('i').removeClass('active-yellow');
	});

	//Tabs checkbox reset
	$('#ttTabs li a').click(function() {
		$('.tt-content input').prop('checked', false);
	});

	//Select All checkbox
	$('#manufacturer-check-country-1').click(function(event) {
		if(this.checked) {
			$('input[name=\'manufacturer-check-country\']').each(function() {
				this.checked = true;
			});
		}
		else {
			$('input[name=\'manufacturer-check-country\']').each(function() {
				this.checked = false;
			});
		}
	});

	$('#manufacturer-check-mark-1').click(function(event) {
		if(this.checked) {
			$('input[name=\'manufacturer-check-mark\']').each(function() {
				this.checked = true;
			});
		}
		else {
			$('input[name=\'manufacturer-check-mark\']').each(function() {
				this.checked = false;
			});
		}
	});

	$('#manufacturer-check-model-1').click(function(event) {
		if(this.checked) {
			$('input[name=\'manufacturer-check-model\']').each(function() {
				this.checked = true;
			});
		}
		else {
			$('input[name=\'manufacturer-check-model\']').each(function() {
				this.checked = false;
			});
		}
	});

	$('#manufacturer-check-year-1').click(function(event) {
		if(this.checked) {
			$('input[name=\'manufacturer-check-year\']').each(function() {
				this.checked = true;
			});
		}
		else {
			$('input[name=\'manufacturer-check-year\']').each(function() {
				this.checked = false;
			});
		}
	});

	//Tooltip
	$('.tooltip-link').tooltip();
	$('.tooltip-link').click(function(event) {
		event.preventDefault();
	});

	//Add fields
	$('.add-field a').click(function(event) {
		event.preventDefault();
		$('.clone-field').clone().val(54654).insertBefore('.add-field').removeClass('clone-field').addClass('mobile-new');
		$('.mobile-new input').val('');
	});

	//Magnific Popup
	$('.open-popup-link').magnificPopup({
		type:'inline',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	//Gallery Slider
	$('.photo-full').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: false,
		arrows: false,
		asNavFor: '.photo-thumb',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
			}
		}
		]
	});
	$('.photo-thumb').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.photo-full',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				centerMode: true,
				slidesToShow: 5,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}
		]
	});

	//Gallery Photo Height
	$('.photo-full a.open-popup-link, .show-all-photo a.open-popup-link').click(function() {
		if ($(window).width() > 768) {
			var PopupHeight = $('.gallery-popup').height(),
			ThumbHeight = $('.photo-thumb-modal').height(),
			TitleHeight = $('.gallery-popup-title').height(),
			PhotoHeight = PopupHeight - ThumbHeight - TitleHeight -10;
			$('.photo-full-modal').css('max-height', PhotoHeight);
		} else {
			var PopupHeight = $('.gallery-popup').height(),
			TitleHeight = $('.gallery-popup-title').height(),
			PhotoHeight = PopupHeight - TitleHeight -10;
			$('.photo-full-modal').css('max-height', PhotoHeight);
		};
	});

	$('.photo-thumb-modal div').click(function() {
		$(this).addClass('active-border-yellow').siblings().removeClass('active-border-yellow');
	});

	$('.photo-full div').click(function() {
		var PhotoAnchor = $(this).attr('data-anchor');
		//alert(PhotoAnchor);
		//$('.photo-full-modal').find('#' + PhotoAnchor).scrollTop(1000);
		$('.photo-full-modal').animate({scrollTop: $('#' + PhotoAnchor).offset().top}, 800);
			//$('.photo-full-modal').find('#' + PhotoAnchor).css('box-shadow', '3px 3px 5px red');
		});


});
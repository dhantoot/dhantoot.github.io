 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

$(document).ready(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	// Scrollax
  $.Scrollax();


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.home-slider').owlCarousel({
			center: true,
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    autoplayHoverPause: false,
	    items: 3,
	    dots: true,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:2,
	        nav:false
	      },
	      1000:{
	        items:3,
	        nav:false
	      }
	    }
	   });
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			loop: true,
			items:1,
			margin: 15,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 2
				}
			}
		});
	};
	carousel();

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();
	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

   
   $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#appointment_time').timepicker();

	console.log('hello world')

	let getHeaders = function(item){

		let htmlview = `
			<img id="logo" src="./images/Logo2T.png" style="height:75px;margin-top: -11px; float: left; margin-left: 15px;opacity:0.9" />
                <div class="colorlib-navbar-brand" style="margin-top: 12px;">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Home</a>
						</li>
						<li class="nav-item">
                            <a class="nav-link" href="services.html">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="products.html">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="abouts.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                
		`;
		$("#header").html(htmlview);
	}

	let getNav = function(item) {
		let htmlview = `
			<div class="js-fullheight colorlib-table">
                <div class="img" style="background-image: url(images/bg_2.jpg);"></div>
                <div class="colorlib-table-cell js-fullheight">
                    <div class="row no-gutters">
                        <div class="col-md-12 text-center">
                            <h1 class="mb-4"><a href="index.html" class="logo">Ira-Air</a></h1>
                            <ul class="nav justify-content-center">
		                        <li class="nav-item">
		                            <a class="nav-link active" href="index.html">Home</a>
								</li>
								<li class="nav-item">
		                            <a class="nav-link" href="services.html">Services</a>
		                        </li>
		                        <li class="nav-item">
		                            <a class="nav-link" href="products.html">Products</a>
		                        </li>
		                        <li class="nav-item">
		                            <a class="nav-link" href="abouts.html">About Us</a>
		                        </li>
		                        <li class="nav-item">
		                            <a class="nav-link" href="contact.html">Contact</a>
		                        </li>
		                    </ul>
                        </div>
                    </div>
                </div>
            </div>
		`;
		$("#nav").html(htmlview);
	}

	let getUl = function(arg){
		let ul = `
		 		<li><a href="index.html">Home </a></li>
				<li><a href="products.html">Products </a></li>
				<li><a href="services.html">Services </a></li>
                <li><a href="abouts.html">About Us </a></li>
                <li><a href="contact.html">Contact </a></li>
		`;
		$("#ul").html(ul)
	}

	let getCarousel = function() {
		let carousel = `
			<a href="portfolio.html" class="slider-item" style="background-image: url(images/bg_1.jpg);">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row slider-text align-items-end justify-content-center">
                            <div style="margin-bottom: 200px" class="col-md-12 ftco-animate p-4" data-scrollax=" properties: { translateY: '70%' }">
                                <h1 class="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">#01 Exterior Building</h1>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="portfolio.html" class="slider-item" style="background-image: url('images/bg_2.jpg');">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row slider-text align-items-end justify-content-center">
                            <div style="margin-bottom: 200px" class="col-md-12 ftco-animate p-4" data-scrollax=" properties: { translateY: '70%' }">
                                <h1 class="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">#02 American Building</h1>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="portfolio.html" class="slider-item" style="background-image: url('images/bg_3.jpg');">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row slider-text align-items-end justify-content-center">
                            <div style="margin-bottom: 200px" class="col-md-12 ftco-animate p-4" data-scrollax=" properties: { translateY: '70%' }">
                                <h1 class="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">#03 Louie's Residences</h1>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="portfolio.html" class="slider-item" style="background-image: url('images/bg_4.jpg');">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row slider-text align-items-end justify-content-center">
                            <div style="margin-bottom: 200px" class="col-md-12 ftco-animate p-4" data-scrollax=" properties: { translateY: '70%' }">
                                <h1 class="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">#04 Business Building</h1>
                            </div>
                        </div>
                    </div>
                </a>
		`;
		$("#_carousel").html(carousel)
	}

	let getState = function(arg) {
		console.log(`at ${arg}`)
	}

	getHeaders(1);
	getNav(1);
	getUl(1);
	getCarousel();

});

